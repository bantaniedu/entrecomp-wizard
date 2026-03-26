import type { NextApiRequest, NextApiResponse } from 'next'
import { ANALYSIS_PROMPT } from '@/lib/analysis-prompt'
import { ENTRECOMP_COMPETENCES } from '@/lib/entrecomp-full-data'
import type { AnalysisResult, AreaSummary, LearningOutcomeMatch, CompetenceMatch } from '@/lib/types'

const ENTRECOMP_AREAS = [
  { id: 'ideas', name: 'Ideas & Opportunities', color: '#3498DB' },
  { id: 'resources', name: 'Resources', color: '#E67E22' },
  { id: 'action', name: 'Into Action', color: '#27AE60' },
]

export const config = {
  maxDuration: 60,
}

async function callAnthropic(content: string, model: string): Promise<any> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not configured')

  const modelId = model === 'claude-sonnet' 
    ? 'claude-sonnet-4-20250514'
    : 'claude-3-5-haiku-20241022'

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: modelId,
      max_tokens: 8192,
      messages: [
        {
          role: 'user',
          content: ANALYSIS_PROMPT + '\n\n---\n\n' + content
        }
      ]
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Anthropic API error: ${error}`)
  }

  const data = await response.json()
  const text = data.content[0].text

  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('No JSON found in response')
  
  return JSON.parse(jsonMatch[0])
}

async function callGemini(content: string, model: string): Promise<any> {
  const apiKey = process.env.GOOGLE_AI_API_KEY
  if (!apiKey) throw new Error('GOOGLE_AI_API_KEY not configured')

  const modelId = model === 'gemini-pro' 
    ? 'gemini-1.5-pro'
    : 'gemini-1.5-flash'

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: ANALYSIS_PROMPT + '\n\n---\n\n' + content }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 8192,
          temperature: 0.3
        }
      })
    }
  )

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Gemini API error: ${error}`)
  }

  const data = await response.json()
  const text = data.candidates[0].content.parts[0].text

  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('No JSON found in response')
  
  return JSON.parse(jsonMatch[0])
}

function buildAreaSummaries(loMatches: LearningOutcomeMatch[]): AreaSummary[] {
  return ENTRECOMP_AREAS.map(area => {
    const areaCompetences = ENTRECOMP_COMPETENCES.filter(c => c.area === area.id)
    const matchedCompetenceIds = new Set(
      loMatches.filter(m => m.area === area.id).map(m => m.competenceId)
    )

    return {
      area: area.id as 'ideas' | 'resources' | 'action',
      areaName: area.name,
      color: area.color,
      competenceCount: matchedCompetenceIds.size,
      totalCompetences: areaCompetences.length,
      coverage: Math.round((matchedCompetenceIds.size / areaCompetences.length) * 100),
      competences: areaCompetences.map(comp => {
        const compMatches = loMatches.filter(m => m.competenceId === comp.id)
        const bestConfidence = compMatches.length > 0 
          ? (compMatches.some(m => m.confidence === 'strong') ? 'strong' 
             : compMatches.some(m => m.confidence === 'moderate') ? 'moderate' 
             : 'weak')
          : undefined
        return {
          id: comp.id,
          name: comp.name,
          matched: matchedCompetenceIds.has(comp.id),
          confidence: bestConfidence as 'strong' | 'moderate' | 'weak' | undefined
        }
      })
    }
  })
}

// Convert learning outcome matches to legacy competence matches for backward compatibility
function convertToCompetenceMatches(loMatches: LearningOutcomeMatch[]): CompetenceMatch[] {
  // Group by competence
  const byCompetence = new Map<string, LearningOutcomeMatch[]>()
  for (const match of loMatches) {
    const existing = byCompetence.get(match.competenceId) || []
    existing.push(match)
    byCompetence.set(match.competenceId, existing)
  }

  return Array.from(byCompetence.entries()).map(([compId, matches]) => {
    const first = matches[0]
    const bestConfidence = matches.some(m => m.confidence === 'strong') ? 'strong'
      : matches.some(m => m.confidence === 'moderate') ? 'moderate' : 'weak'
    
    return {
      competenceId: compId,
      competenceName: first.competenceName,
      area: first.area,
      areaName: first.areaName,
      confidence: bestConfidence as 'strong' | 'moderate' | 'weak',
      matchedText: matches.map(m => m.matchedText).join(' | '),
      explanation: `${matches.length} learning outcome(s) matched: ${matches.map(m => m.threadName).join(', ')}`,
      proficiencyLevel: first.proficiencyBand,
      threads: Array.from(new Set(matches.map(m => m.threadName)))
    }
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { content, filename, model } = req.body

  if (!content) {
    return res.status(400).json({ error: 'No content provided' })
  }

  // Truncate content if too long
  const truncatedContent = content.length > 12000 
    ? content.substring(0, 12000) + '\n\n[Content truncated...]'
    : content

  try {
    let analysisData: any

    if (model && model.startsWith('gemini')) {
      analysisData = await callGemini(truncatedContent, model)
    } else {
      // Default to Claude Sonnet
      analysisData = await callAnthropic(truncatedContent, model || 'claude-sonnet')
    }

    // Get learning outcome matches
    const loMatches: LearningOutcomeMatch[] = analysisData.learningOutcomeMatches || []
    
    // Build area summaries
    const areas = buildAreaSummaries(loMatches)
    const totalCoverage = Math.round(
      areas.reduce((sum, a) => sum + a.coverage, 0) / areas.length
    )

    // Convert to competence matches for backward compatibility
    const competenceMatches = convertToCompetenceMatches(loMatches)

    // Calculate proficiency distribution
    const proficiencyDistribution = {
      foundation: loMatches.filter(m => m.proficiencyBand === 'foundation').length,
      intermediate: loMatches.filter(m => m.proficiencyBand === 'intermediate').length,
      advanced: loMatches.filter(m => m.proficiencyBand === 'advanced').length,
      expert: loMatches.filter(m => m.proficiencyBand === 'expert').length,
    }

    // Get unique competences and threads
    const uniqueCompetences = new Set(loMatches.map(m => m.competenceId))
    const uniqueThreads = new Set(loMatches.map(m => m.threadId))

    const result: AnalysisResult = {
      documentName: filename || 'Uploaded Document',
      analysisDate: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      model: model === 'claude-sonnet' ? 'Claude Sonnet' :
             model === 'claude-haiku' ? 'Claude Haiku' :
             model === 'gemini-pro' ? 'Gemini Pro' :
             model === 'gemini-flash' ? 'Gemini Flash' : 'Claude Sonnet',
      summary: {
        overallScore: analysisData.summary?.totalOutcomesMatched 
          ? Math.min(100, Math.round(analysisData.summary.totalOutcomesMatched * 5))
          : totalCoverage,
        totalMatches: loMatches.length,
        strongMatches: loMatches.filter(m => m.confidence === 'strong').length,
        moderateMatches: loMatches.filter(m => m.confidence === 'moderate').length,
        weakMatches: loMatches.filter(m => m.confidence === 'weak').length,
        areasIdentified: areas.filter(a => a.competenceCount > 0).length,
        competencesIdentified: uniqueCompetences.size,
        threadsCovered: uniqueThreads.size,
        learningOutcomesCovered: loMatches.length,
        proficiencyDistribution
      },
      areas,
      matches: competenceMatches,
      learningOutcomeMatches: loMatches,
      recommendations: analysisData.recommendations || [],
      gaps: analysisData.gaps?.competencesNotCovered || []
    }

    return res.status(200).json(result)
  } catch (error) {
    console.error('Analysis error:', error)
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Analysis failed' 
    })
  }
}
