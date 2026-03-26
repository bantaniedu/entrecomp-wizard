import { ENTRECOMP_COMPETENCES, ENTRECOMP_STATS } from './entrecomp-full-data'

// Generate the full prompt with all learning outcomes
export function generateAnalysisPrompt(): string {
  let prompt = `You are an expert in the EntreComp (Entrepreneurship Competence) Framework. Your task is to analyse educational content and identify which specific EntreComp learning outcomes are achieved.

## EntreComp Framework Overview

The framework has:
- **${ENTRECOMP_STATS.areas} Areas**: Ideas & Opportunities, Resources, Into Action
- **${ENTRECOMP_STATS.competences} Competences**
- **${ENTRECOMP_STATS.threads} Threads** (sub-components of competences)
- **${ENTRECOMP_STATS.learningOutcomes} Learning Outcomes** across 8 proficiency levels

### Proficiency Levels
- **Foundation (Levels 1-2)**: Discover, Explore - Relying on support from others
- **Intermediate (Levels 3-4)**: Experiment, Dare - Building independence
- **Advanced (Levels 5-6)**: Improve, Reinforce - Taking responsibility
- **Expert (Levels 7-8)**: Expand, Transform - Driving transformation

## Complete EntreComp Learning Outcomes

`

  // Add all competences with their threads and learning outcomes
  for (const comp of ENTRECOMP_COMPETENCES) {
    prompt += `### ${comp.name} (${comp.areaName})\n`
    prompt += `*${comp.description}*\n\n`
    
    for (const thread of comp.threads) {
      prompt += `**Thread: ${thread.name}**\n`
      for (const lo of thread.learningOutcomes) {
        prompt += `- [${lo.id}] Level ${lo.level} (${lo.levelName}): "${lo.text}"\n`
      }
      prompt += `\n`
    }
  }

  prompt += `
## Your Task

Analyse the provided educational content (curriculum, lesson plan, course outline) and identify:

1. **Which specific learning outcomes are achieved** - match to the exact learning outcome IDs above
2. **The evidence** - quote the text that demonstrates each learning outcome
3. **Recommendations** - suggest learning outcomes that could be added

Return a JSON response with this exact structure:

{
  "learningOutcomeMatches": [
    {
      "learningOutcomeId": "so-identify-2",
      "learningOutcomeText": "I can recognise opportunities to create value in my community and surroundings.",
      "threadId": "so-identify",
      "threadName": "Identify, create and seize opportunities",
      "competenceId": "spotting-opportunities",
      "competenceName": "Spotting Opportunities",
      "area": "ideas",
      "areaName": "Ideas & Opportunities",
      "level": 2,
      "levelName": "Explore",
      "proficiencyBand": "foundation",
      "confidence": "strong|moderate|weak",
      "matchedText": "exact quote from document that demonstrates this outcome",
      "explanation": "brief explanation of why this matches"
    }
  ],
  "recommendations": [
    {
      "learningOutcomeId": "cr-develop-3",
      "learningOutcomeText": "I can experiment with different techniques to generate alternative solutions to problems.",
      "threadName": "Develop ideas",
      "competenceName": "Creativity",
      "area": "ideas",
      "suggestion": "how to incorporate this learning outcome",
      "priority": "high|medium|low"
    }
  ],
  "summary": {
    "totalOutcomesMatched": number,
    "competencesCovered": number,
    "threadsCovered": number,
    "strongMatches": number,
    "moderateMatches": number,
    "weakMatches": number,
    "proficiencyDistribution": {
      "foundation": number,
      "intermediate": number,
      "advanced": number,
      "expert": number
    }
  },
  "gaps": {
    "competencesNotCovered": ["list of competence names"],
    "areasUnderrepresented": ["Ideas & Opportunities", "Resources", or "Into Action"]
  }
}

Guidelines:
- Match to SPECIFIC learning outcomes using their IDs (e.g., "so-identify-2", "cr-develop-3")
- Only identify genuine matches - be accurate, not generous
- Quote the exact text that demonstrates each outcome
- Consider the proficiency level - match to the appropriate level based on complexity
- Identify at least 5-10 learning outcomes if present
- Provide 3-5 actionable recommendations for enhancement

Now analyse this content:
`

  return prompt
}

export const ANALYSIS_PROMPT = generateAnalysisPrompt()
