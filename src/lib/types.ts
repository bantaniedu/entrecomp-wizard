export interface LearningOutcomeMatch {
  learningOutcomeId: string
  learningOutcomeText: string
  threadId: string
  threadName: string
  competenceId: string
  competenceName: string
  area: 'ideas' | 'resources' | 'action'
  areaName: string
  level: number
  levelName: string
  proficiencyBand: 'foundation' | 'intermediate' | 'advanced' | 'expert'
  confidence: 'strong' | 'moderate' | 'weak'
  matchedText: string
  explanation: string
}

export interface CompetenceMatch {
  competenceId: string
  competenceName: string
  area: 'ideas' | 'resources' | 'action'
  areaName: string
  confidence: 'strong' | 'moderate' | 'weak'
  matchedText: string
  explanation: string
  proficiencyLevel?: string
  threads?: string[]
}

export interface Recommendation {
  type?: 'enhancement' | 'opportunity' | 'gap'
  learningOutcomeId?: string
  learningOutcomeText?: string
  threadName?: string
  competenceId?: string
  competenceName: string
  area: 'ideas' | 'resources' | 'action'
  suggestion: string
  exampleActivity?: string
  priority: 'high' | 'medium' | 'low'
}

export interface AreaSummary {
  area: 'ideas' | 'resources' | 'action'
  areaName: string
  color: string
  competenceCount: number
  totalCompetences: number
  coverage: number
  competences: {
    id: string
    name: string
    matched: boolean
    confidence?: 'strong' | 'moderate' | 'weak'
  }[]
}

export interface AnalysisResult {
  documentName: string
  analysisDate: string
  model: string
  summary: {
    overallScore: number
    totalMatches: number
    strongMatches: number
    moderateMatches: number
    weakMatches: number
    areasIdentified: number
    competencesIdentified: number
    threadsCovered?: number
    learningOutcomesCovered?: number
    proficiencyDistribution?: {
      foundation: number
      intermediate: number
      advanced: number
      expert: number
    }
  }
  areas: AreaSummary[]
  matches: CompetenceMatch[]
  learningOutcomeMatches?: LearningOutcomeMatch[]
  recommendations: Recommendation[]
  gaps: string[]
}

export interface ModelOption {
  id: string
  name: string
  provider: 'anthropic' | 'google'
  description: string
  costTier: 'high' | 'medium' | 'low'
}

export const MODELS: ModelOption[] = [
  {
    id: 'claude-sonnet',
    name: 'Claude Sonnet',
    provider: 'anthropic',
    description: 'Best quality, highest cost',
    costTier: 'high'
  },
  {
    id: 'claude-haiku',
    name: 'Claude Haiku',
    provider: 'anthropic',
    description: 'Good quality, lower cost',
    costTier: 'medium'
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'google',
    description: 'Good quality, lower cost',
    costTier: 'medium'
  },
  {
    id: 'gemini-flash',
    name: 'Gemini Flash',
    provider: 'google',
    description: 'Fast and cheap',
    costTier: 'low'
  }
]
