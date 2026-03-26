// EntreComp Framework Data
// Based on "EntreComp: The Entrepreneurship Competence Framework" (Bacigalupo et al., 2016)

export const ENTRECOMP_AREAS = [
  {
    id: 'ideas',
    name: 'Ideas & Opportunities',
    icon: '💡',
    color: '#3498DB',
    description: 'Use your imagination and abilities to identify opportunities for creating value.'
  },
  {
    id: 'resources',
    name: 'Resources',
    icon: '⚙️',
    color: '#E67E22',
    description: 'Gather and manage the resources you need to turn your ideas into action.'
  },
  {
    id: 'action',
    name: 'Into Action',
    icon: '🚀',
    color: '#27AE60',
    description: 'Turn ideas into action. Make the most of your initiative.'
  }
]

export const ENTRECOMP_COMPETENCES = [
  // IDEAS & OPPORTUNITIES
  {
    id: 'spotting-opportunities',
    name: 'Spotting Opportunities',
    area: 'ideas',
    description: 'Use your imagination and abilities to identify opportunities for creating value.',
    keywords: ['opportunity', 'identify', 'recognise', 'discover', 'spot', 'market', 'need', 'demand', 'gap', 'potential']
  },
  {
    id: 'creativity',
    name: 'Creativity',
    area: 'ideas',
    description: 'Develop creative and purposeful ideas.',
    keywords: ['creative', 'innovate', 'imagine', 'design', 'invent', 'brainstorm', 'idea', 'novel', 'original', 'think outside']
  },
  {
    id: 'vision',
    name: 'Vision',
    area: 'ideas',
    description: 'Work towards your vision of the future.',
    keywords: ['vision', 'future', 'goal', 'aspiration', 'ambition', 'dream', 'direction', 'purpose', 'mission', 'strategy']
  },
  {
    id: 'valuing-ideas',
    name: 'Valuing Ideas',
    area: 'ideas',
    description: 'Make the most of ideas and opportunities.',
    keywords: ['value', 'evaluate', 'assess', 'judge', 'worth', 'potential', 'feasibility', 'viability', 'benefit', 'impact']
  },
  {
    id: 'ethical-thinking',
    name: 'Ethical & Sustainable Thinking',
    area: 'ideas',
    description: 'Assess the consequences and impact of ideas, opportunities and actions.',
    keywords: ['ethical', 'sustainable', 'responsible', 'impact', 'consequence', 'environment', 'social', 'fair', 'moral', 'green']
  },
  // RESOURCES
  {
    id: 'self-awareness',
    name: 'Self-awareness & Self-efficacy',
    area: 'resources',
    description: 'Believe in yourself and keep developing.',
    keywords: ['self-aware', 'confidence', 'believe', 'strength', 'weakness', 'reflect', 'improve', 'capability', 'potential', 'growth']
  },
  {
    id: 'motivation',
    name: 'Motivation & Perseverance',
    area: 'resources',
    description: 'Stay focused and don\'t give up.',
    keywords: ['motivate', 'persevere', 'persist', 'resilient', 'determined', 'commit', 'focus', 'drive', 'dedication', 'overcome']
  },
  {
    id: 'mobilising-resources',
    name: 'Mobilising Resources',
    area: 'resources',
    description: 'Gather and manage the resources you need.',
    keywords: ['resource', 'mobilise', 'gather', 'manage', 'obtain', 'funding', 'budget', 'material', 'tool', 'support']
  },
  {
    id: 'financial-literacy',
    name: 'Financial & Economic Literacy',
    area: 'resources',
    description: 'Develop financial and economic know-how.',
    keywords: ['financial', 'economic', 'budget', 'cost', 'profit', 'invest', 'money', 'price', 'revenue', 'business model']
  },
  {
    id: 'mobilising-others',
    name: 'Mobilising Others',
    area: 'resources',
    description: 'Inspire, enthuse and get others on board.',
    keywords: ['mobilise', 'inspire', 'lead', 'team', 'collaborate', 'persuade', 'influence', 'network', 'stakeholder', 'communicate']
  },
  // INTO ACTION
  {
    id: 'taking-initiative',
    name: 'Taking the Initiative',
    area: 'action',
    description: 'Go for it.',
    keywords: ['initiative', 'proactive', 'start', 'begin', 'launch', 'act', 'independent', 'autonomous', 'self-starter', 'enterprise']
  },
  {
    id: 'planning-management',
    name: 'Planning & Management',
    area: 'action',
    description: 'Prioritise, organise and follow up.',
    keywords: ['plan', 'manage', 'organise', 'prioritise', 'schedule', 'deadline', 'milestone', 'project', 'task', 'time management']
  },
  {
    id: 'coping-uncertainty',
    name: 'Coping with Uncertainty, Ambiguity & Risk',
    area: 'action',
    description: 'Make decisions dealing with uncertainty, ambiguity and risk.',
    keywords: ['uncertain', 'risk', 'ambiguity', 'adapt', 'flexible', 'cope', 'change', 'unknown', 'challenge', 'decision']
  },
  {
    id: 'working-with-others',
    name: 'Working with Others',
    area: 'action',
    description: 'Team up, collaborate and network.',
    keywords: ['collaborate', 'team', 'cooperate', 'partner', 'work together', 'group', 'collective', 'share', 'co-create', 'joint']
  },
  {
    id: 'learning-through-experience',
    name: 'Learning Through Experience',
    area: 'action',
    description: 'Learn by doing.',
    keywords: ['learn', 'experience', 'reflect', 'feedback', 'improve', 'iterate', 'experiment', 'trial', 'mistake', 'grow']
  }
]

export const ANALYSIS_PROMPT = `You are an expert in the EntreComp (Entrepreneurship Competence) Framework. Your task is to analyse educational content and identify alignments with the 15 EntreComp competences.

## EntreComp Framework Overview

The framework has 3 areas with 15 competences:

### Ideas & Opportunities (5 competences)
1. **Spotting Opportunities** - Identify opportunities for creating value
2. **Creativity** - Develop creative and purposeful ideas
3. **Vision** - Work towards your vision of the future
4. **Valuing Ideas** - Make the most of ideas and opportunities
5. **Ethical & Sustainable Thinking** - Assess consequences and impact

### Resources (5 competences)
6. **Self-awareness & Self-efficacy** - Believe in yourself and keep developing
7. **Motivation & Perseverance** - Stay focused and don't give up
8. **Mobilising Resources** - Gather and manage the resources you need
9. **Financial & Economic Literacy** - Develop financial and economic know-how
10. **Mobilising Others** - Inspire, enthuse and get others on board

### Into Action (5 competences)
11. **Taking the Initiative** - Go for it
12. **Planning & Management** - Prioritise, organise and follow up
13. **Coping with Uncertainty, Ambiguity & Risk** - Make decisions dealing with uncertainty
14. **Working with Others** - Team up, collaborate and network
15. **Learning Through Experience** - Learn by doing

## Your Task

Analyse the provided educational content and return a JSON response with this exact structure:

{
  "matches": [
    {
      "competenceId": "spotting-opportunities",
      "competenceName": "Spotting Opportunities",
      "area": "ideas",
      "areaName": "Ideas & Opportunities",
      "confidence": "strong|moderate|weak",
      "matchedText": "exact quote from document",
      "explanation": "why this matches the competence",
      "proficiencyLevel": "Foundation|Intermediate|Advanced|Expert"
    }
  ],
  "recommendations": [
    {
      "type": "enhancement|opportunity|gap",
      "competenceId": "creativity",
      "competenceName": "Creativity",
      "area": "ideas",
      "suggestion": "specific actionable suggestion",
      "exampleActivity": "optional example activity",
      "priority": "high|medium|low"
    }
  ],
  "gaps": ["list of competence names not addressed"],
  "summary": {
    "overallScore": 0-100,
    "totalMatches": number,
    "strongMatches": number,
    "moderateMatches": number,
    "weakMatches": number,
    "competencesIdentified": number
  }
}

Guidelines:
- Be thorough but accurate - only identify genuine alignments
- Quote the exact text that demonstrates each competence
- Provide actionable recommendations
- Consider implicit as well as explicit alignments
- Rate confidence honestly (strong = explicit alignment, moderate = clear implicit, weak = potential/partial)
- Suggest 3-5 priority recommendations for improvement

Now analyse this content:
`

export function getAreaForCompetence(competenceId: string): 'ideas' | 'resources' | 'action' {
  const comp = ENTRECOMP_COMPETENCES.find(c => c.id === competenceId)
  return (comp?.area as 'ideas' | 'resources' | 'action') || 'ideas'
}

export function getCompetenceName(competenceId: string): string {
  const comp = ENTRECOMP_COMPETENCES.find(c => c.id === competenceId)
  return comp?.name || competenceId
}
