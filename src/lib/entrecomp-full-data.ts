// Full EntreComp Framework Data with Threads and Learning Outcomes
// Based on "EntreComp: The Entrepreneurship Competence Framework" (Bacigalupo et al., 2016)

export interface LearningOutcome {
  id: string
  text: string
  level: number
  levelName: string
  proficiencyBand: 'foundation' | 'intermediate' | 'advanced' | 'expert'
}

export interface Thread {
  id: string
  name: string
  competenceId: string
  competenceName: string
  area: 'ideas' | 'resources' | 'action'
  areaName: string
  learningOutcomes: LearningOutcome[]
}

export interface Competence {
  id: string
  name: string
  area: 'ideas' | 'resources' | 'action'
  areaName: string
  description: string
  threads: Thread[]
}

export const PROFICIENCY_LEVELS = [
  { level: 1, name: 'Discover', band: 'foundation' as const },
  { level: 2, name: 'Explore', band: 'foundation' as const },
  { level: 3, name: 'Experiment', band: 'intermediate' as const },
  { level: 4, name: 'Dare', band: 'intermediate' as const },
  { level: 5, name: 'Improve', band: 'advanced' as const },
  { level: 6, name: 'Reinforce', band: 'advanced' as const },
  { level: 7, name: 'Expand', band: 'expert' as const },
  { level: 8, name: 'Transform', band: 'expert' as const },
]

export const ENTRECOMP_COMPETENCES: Competence[] = [
  // ===== IDEAS & OPPORTUNITIES =====
  {
    id: 'spotting-opportunities',
    name: 'Spotting Opportunities',
    area: 'ideas',
    areaName: 'Ideas & Opportunities',
    description: 'Use your imagination and abilities to identify opportunities for creating value.',
    threads: [
      {
        id: 'so-identify',
        name: 'Identify, create and seize opportunities',
        competenceId: 'spotting-opportunities',
        competenceName: 'Spotting Opportunities',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'so-identify-1', text: 'I can identify opportunities to create value for others.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'so-identify-2', text: 'I can recognise opportunities to create value in my community and surroundings.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'so-identify-3', text: 'I can explain what makes an opportunity to create value.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'so-identify-4', text: 'I can proactively look for opportunities to create value, including out of necessity.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'so-identify-5', text: 'I can describe different analytical approaches to identify entrepreneurial opportunities.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'so-identify-6', text: 'I can use my knowledge and understanding of the context to create opportunities to create value.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'so-identify-7', text: 'I can act on opportunities to create value for others, including in new markets.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'so-identify-8', text: 'I can spot and quickly take advantage of an opportunity.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'so-needs',
        name: 'Focus on challenges',
        competenceId: 'spotting-opportunities',
        competenceName: 'Spotting Opportunities',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'so-needs-1', text: 'I can find examples of challenges in my surroundings that need solutions.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'so-needs-2', text: 'I can explore challenges in my surroundings that I can contribute to solving.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'so-needs-3', text: 'I can identify needs and challenges that need to be met.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'so-needs-4', text: 'I can describe needs and challenges in my community that can be solved.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'so-needs-5', text: 'I can analyse the context to identify unfulfilled needs and challenges.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'so-needs-6', text: 'I can judge the suitability of different value-creating activities to address identified needs.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'so-needs-7', text: 'I can identify needs and challenges at strategic level.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'so-needs-8', text: 'I can redefine how challenges and unmet needs are perceived in order to maximise value creation.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'so-analyse',
        name: 'Analyse the context',
        competenceId: 'spotting-opportunities',
        competenceName: 'Spotting Opportunities',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'so-analyse-1', text: 'I can identify contexts in which I can explore my surroundings.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'so-analyse-2', text: 'I can find contexts in which challenges in my community can be explored.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'so-analyse-3', text: 'I can explain that the context is constantly changing.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'so-analyse-4', text: 'I can use my knowledge of contexts to engage with challenges and opportunities.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'so-analyse-5', text: 'I can identify the ways in which contexts change and how this creates opportunities.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'so-analyse-6', text: 'I can map, use and update my knowledge of contexts to help search for and discover opportunities.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'so-analyse-7', text: 'I can research and experiment with innovative strategies and solutions.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'so-analyse-8', text: 'I can judge the feasibility and desirability of value-creation strategies.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'creativity',
    name: 'Creativity',
    area: 'ideas',
    areaName: 'Ideas & Opportunities',
    description: 'Develop creative and purposeful ideas.',
    threads: [
      {
        id: 'cr-curious',
        name: 'Be curious and open',
        competenceId: 'creativity',
        competenceName: 'Creativity',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'cr-curious-1', text: 'I am curious about the world around me.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'cr-curious-2', text: 'I am open to exploring and experimenting with new things.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'cr-curious-3', text: 'I am interested in multiple disciplines and approaches.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'cr-curious-4', text: 'I experiment with different creative techniques.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'cr-curious-5', text: 'I gather relevant information to generate new ideas and opportunities.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'cr-curious-6', text: 'I combine knowledge and resources from different fields.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'cr-curious-7', text: 'I am a driver of change and innovation.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'cr-curious-8', text: 'I promote a culture of curiosity and openness in my environment.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'cr-develop',
        name: 'Develop ideas',
        competenceId: 'creativity',
        competenceName: 'Creativity',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'cr-develop-1', text: 'I can develop ideas that solve problems that are relevant to me and my surroundings.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'cr-develop-2', text: 'I can explore and experiment with innovative approaches.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'cr-develop-3', text: 'I can experiment with different techniques to generate alternative solutions to problems.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'cr-develop-4', text: 'I can test the value of my solutions with end users.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'cr-develop-5', text: 'I can set up processes to involve stakeholders in finding, developing and testing ideas.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'cr-develop-6', text: 'I can tailor a variety of ways of involving stakeholders to suit the needs of my value-creating activity.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'cr-develop-7', text: 'I can design new processes to involve stakeholders in generating, developing and testing ideas.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'cr-develop-8', text: 'Alone and as part of a team, I can develop ideas that create value for others.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'cr-define',
        name: 'Define problems',
        competenceId: 'creativity',
        competenceName: 'Creativity',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'cr-define-1', text: 'I can identify problems that are relevant to me.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'cr-define-2', text: 'I can explore how problems can be looked at from different perspectives.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'cr-define-3', text: 'I can redefine the description of a challenge so as to create opportunities.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'cr-define-4', text: 'I can apply different problem-definition techniques to complex challenges.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'cr-define-5', text: 'I can identify new perspectives to address complex challenges.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'cr-define-6', text: 'I can develop new strategies to solve complex problems.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'cr-define-7', text: 'I can set up processes to identify and define strategic problems.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'cr-define-8', text: 'I can facilitate the resolution of complex problems through systems thinking.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'vision',
    name: 'Vision',
    area: 'ideas',
    areaName: 'Ideas & Opportunities',
    description: 'Work towards your vision of the future.',
    threads: [
      {
        id: 'vi-imagine',
        name: 'Imagine',
        competenceId: 'vision',
        competenceName: 'Vision',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'vi-imagine-1', text: 'I can imagine a desirable future.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'vi-imagine-2', text: 'I can imagine what a better situation would look like.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'vi-imagine-3', text: 'I can build an inspiring vision that engages others.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'vi-imagine-4', text: 'I can develop a vision that addresses stakeholder needs.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'vi-imagine-5', text: 'I can develop a strategic vision based on thorough analysis.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'vi-imagine-6', text: 'I can create a compelling narrative around my vision.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'vi-imagine-7', text: 'I can develop a transformational vision for my field.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'vi-imagine-8', text: 'I can inspire others to join in achieving a shared vision.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'vi-think',
        name: 'Think strategically',
        competenceId: 'vision',
        competenceName: 'Vision',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'vi-think-1', text: 'I can describe how some ideas are better suited to certain situations.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'vi-think-2', text: 'I can describe what steps are needed to achieve my goals.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'vi-think-3', text: 'I can set short- and medium-term goals for my value-creating activity.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'vi-think-4', text: 'I can develop strategic options to achieve my goals.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'vi-think-5', text: 'I can develop a strategy based on analysis of the environment.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'vi-think-6', text: 'I can adapt my strategy to respond to changing circumstances.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'vi-think-7', text: 'I can anticipate future trends and position my strategy accordingly.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'vi-think-8', text: 'I can develop long-term strategies that create sustainable value.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'valuing-ideas',
    name: 'Valuing Ideas',
    area: 'ideas',
    areaName: 'Ideas & Opportunities',
    description: 'Make the most of ideas and opportunities.',
    threads: [
      {
        id: 'va-recognise',
        name: 'Recognise the value of ideas',
        competenceId: 'valuing-ideas',
        competenceName: 'Valuing Ideas',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'va-recognise-1', text: 'I can show that I value ideas put forward by others.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'va-recognise-2', text: 'I can identify the basic elements that make an idea valuable.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'va-recognise-3', text: 'I can evaluate ideas using appropriate criteria.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'va-recognise-4', text: 'I can compare different ideas and judge which have the most potential.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'va-recognise-5', text: 'I can apply multiple valuation methods to assess ideas.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'va-recognise-6', text: 'I can develop a comprehensive approach to valuing ideas.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'va-recognise-7', text: 'I can create frameworks for evaluating ideas at strategic level.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'va-recognise-8', text: 'I can identify ideas with transformative potential.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'va-share',
        name: 'Share and protect ideas',
        competenceId: 'valuing-ideas',
        competenceName: 'Valuing Ideas',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'va-share-1', text: 'I can share my ideas with others.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'va-share-2', text: 'I understand that ideas can be valuable and sometimes need protection.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'va-share-3', text: 'I can explain my ideas clearly to different audiences.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'va-share-4', text: 'I am aware of intellectual property rights and how they work.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'va-share-5', text: 'I can develop strategies for protecting and sharing ideas.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'va-share-6', text: 'I can use intellectual property tools to protect innovations.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'va-share-7', text: 'I can develop IP strategies for complex portfolios of ideas.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'va-share-8', text: 'I can balance openness and protection of ideas effectively.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'ethical-thinking',
    name: 'Ethical & Sustainable Thinking',
    area: 'ideas',
    areaName: 'Ideas & Opportunities',
    description: 'Assess the consequences and impact of ideas, opportunities and actions.',
    threads: [
      {
        id: 'et-assess',
        name: 'Assess consequences and impact',
        competenceId: 'ethical-thinking',
        competenceName: 'Ethical & Sustainable Thinking',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'et-assess-1', text: 'I can describe how my actions can affect others and my surroundings.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'et-assess-2', text: 'I can recognise the impact that different options can have on the community and the environment.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'et-assess-3', text: 'I can judge the impact that different value-creating activities may have on stakeholders.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'et-assess-4', text: 'I can assess and compare the positive and negative impacts of different options.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'et-assess-5', text: 'I can develop a comprehensive approach to assessing impact.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'et-assess-6', text: 'I can integrate impact assessment into my decision-making.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'et-assess-7', text: 'I can pioneer new approaches to assessing societal impact.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'et-assess-8', text: 'I can create frameworks for measuring and maximising positive impact.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'et-ethical',
        name: 'Behave ethically',
        competenceId: 'ethical-thinking',
        competenceName: 'Ethical & Sustainable Thinking',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'et-ethical-1', text: 'I care about being fair and doing the right thing.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'et-ethical-2', text: 'I can recognise the effect that a value-creating activity may have on stakeholders.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'et-ethical-3', text: 'I can apply ethical principles to my decisions and actions.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'et-ethical-4', text: 'I can integrate social responsibility into my activities.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'et-ethical-5', text: 'I can develop ethical frameworks for value-creating activities.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'et-ethical-6', text: 'I can promote ethical behaviour in my organisation.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'et-ethical-7', text: 'I can lead ethical transformation in my field.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'et-ethical-8', text: 'I can set ethical standards that influence my sector.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'et-sustain',
        name: 'Think sustainably',
        competenceId: 'ethical-thinking',
        competenceName: 'Ethical & Sustainable Thinking',
        area: 'ideas',
        areaName: 'Ideas & Opportunities',
        learningOutcomes: [
          { id: 'et-sustain-1', text: 'I can recognise the importance of sustainability.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'et-sustain-2', text: 'I can describe the difference between sustainable and unsustainable approaches.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'et-sustain-3', text: 'I can integrate sustainability into my value-creating activities.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'et-sustain-4', text: 'I can identify sustainable business models and approaches.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'et-sustain-5', text: 'I can develop strategies that balance profit, people and planet.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'et-sustain-6', text: 'I can apply circular economy principles to my activities.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'et-sustain-7', text: 'I can drive systemic change towards sustainability.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'et-sustain-8', text: 'I can develop innovative sustainable solutions at scale.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  // ===== RESOURCES =====
  {
    id: 'self-awareness',
    name: 'Self-awareness & Self-efficacy',
    area: 'resources',
    areaName: 'Resources',
    description: 'Believe in yourself and keep developing.',
    threads: [
      {
        id: 'sa-aspirations',
        name: 'Follow your aspirations',
        competenceId: 'self-awareness',
        competenceName: 'Self-awareness & Self-efficacy',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'sa-aspirations-1', text: 'I can identify my interests, preferences and wishes.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'sa-aspirations-2', text: 'I can describe how my interests and aspirations relate to my goals.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'sa-aspirations-3', text: 'I can reflect on my individual and group needs, wants and aspirations.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'sa-aspirations-4', text: 'I can set goals that reflect my aspirations and priorities.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'sa-aspirations-5', text: 'I can develop strategies to achieve my long-term aspirations.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'sa-aspirations-6', text: 'I can align my activities with my core values and aspirations.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'sa-aspirations-7', text: 'I can inspire others to pursue their aspirations.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'sa-aspirations-8', text: 'I can create environments where people can achieve their potential.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'sa-strengths',
        name: 'Identify your strengths and weaknesses',
        competenceId: 'self-awareness',
        competenceName: 'Self-awareness & Self-efficacy',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'sa-strengths-1', text: 'I can recognise things I am good at and things I need to improve.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'sa-strengths-2', text: 'I can describe my strengths and weaknesses as a learner and creator.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'sa-strengths-3', text: 'I can assess my strengths and weaknesses in relation to opportunities.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'sa-strengths-4', text: 'I can build on my strengths to develop my entrepreneurial capability.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'sa-strengths-5', text: 'I can develop strategies to address my weaknesses and leverage my strengths.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'sa-strengths-6', text: 'I can help others identify their strengths and development areas.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'sa-strengths-7', text: 'I can build high-performing teams based on complementary strengths.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'sa-strengths-8', text: 'I can create talent development systems for entrepreneurial capability.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'sa-believe',
        name: 'Believe in your ability',
        competenceId: 'self-awareness',
        competenceName: 'Self-awareness & Self-efficacy',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'sa-believe-1', text: 'I trust myself and believe that I can influence things around me.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'sa-believe-2', text: 'I believe I can shape my own future.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'sa-believe-3', text: 'I believe in my ability to turn ideas into action.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'sa-believe-4', text: 'I can maintain belief in my abilities even when facing setbacks.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'sa-believe-5', text: 'I can build others\' confidence in their abilities.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'sa-believe-6', text: 'I can create environments that support self-efficacy.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'sa-believe-7', text: 'I can inspire confidence in others to tackle complex challenges.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'sa-believe-8', text: 'I can develop self-efficacy at organisational level.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'motivation-perseverance',
    name: 'Motivation & Perseverance',
    area: 'resources',
    areaName: 'Resources',
    description: 'Stay focused and don\'t give up.',
    threads: [
      {
        id: 'mp-driven',
        name: 'Stay driven',
        competenceId: 'motivation-perseverance',
        competenceName: 'Motivation & Perseverance',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'mp-driven-1', text: 'I am driven by the desire to try new things.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'mp-driven-2', text: 'I show enthusiasm and willingness to engage in activities.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'mp-driven-3', text: 'I am driven by the desire to turn ideas into action and create value.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'mp-driven-4', text: 'I can sustain my motivation over time.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'mp-driven-5', text: 'I can find sustained motivation to achieve long-term goals.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'mp-driven-6', text: 'I can motivate and energise others in my team.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'mp-driven-7', text: 'I can build a motivational culture across organisations.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'mp-driven-8', text: 'I can sustain momentum through complex, long-term transformations.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'mp-resilient',
        name: 'Be resilient',
        competenceId: 'motivation-perseverance',
        competenceName: 'Motivation & Perseverance',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'mp-resilient-1', text: 'I do not give up after a first unsuccessful attempt.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'mp-resilient-2', text: 'I can deal with not getting my way.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'mp-resilient-3', text: 'I can adapt my approach when my first ideas don\'t work.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'mp-resilient-4', text: 'I can withstand pressure and adversity.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'mp-resilient-5', text: 'I can recover quickly from setbacks and continue working towards my goals.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'mp-resilient-6', text: 'I can help others develop resilience.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'mp-resilient-7', text: 'I can build systems that enable resilience at scale.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'mp-resilient-8', text: 'I can turn failures and crises into opportunities for growth.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'mobilising-resources',
    name: 'Mobilising Resources',
    area: 'resources',
    areaName: 'Resources',
    description: 'Gather and manage the resources you need.',
    threads: [
      {
        id: 'mr-manage',
        name: 'Manage resources',
        competenceId: 'mobilising-resources',
        competenceName: 'Mobilising Resources',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'mr-manage-1', text: 'I can describe resources I may need to carry out a simple activity.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'mr-manage-2', text: 'I can identify the resources I need for a simple value-creating activity.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'mr-manage-3', text: 'I can manage material, non-material and digital resources to create value.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'mr-manage-4', text: 'I can get the most out of limited resources.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'mr-manage-5', text: 'I can develop resource strategies for complex activities.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'mr-manage-6', text: 'I can optimise resource allocation across multiple projects.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'mr-manage-7', text: 'I can develop innovative resource mobilisation strategies.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'mr-manage-8', text: 'I can create systems for efficient resource utilisation at scale.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'mr-support',
        name: 'Get support',
        competenceId: 'mobilising-resources',
        competenceName: 'Mobilising Resources',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'mr-support-1', text: 'I can ask for help when I need it.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'mr-support-2', text: 'I can identify who can help me with my activities.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'mr-support-3', text: 'I can get support from mentors, advisors and peers.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'mr-support-4', text: 'I can build a support network for my activities.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'mr-support-5', text: 'I can develop strategic partnerships and alliances.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'mr-support-6', text: 'I can create formal support structures for value-creating activities.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'mr-support-7', text: 'I can build ecosystems of support for innovation and entrepreneurship.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'mr-support-8', text: 'I can create institutional frameworks for supporting value creation.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'financial-literacy',
    name: 'Financial & Economic Literacy',
    area: 'resources',
    areaName: 'Resources',
    description: 'Develop financial and economic know-how.',
    threads: [
      {
        id: 'fl-understand',
        name: 'Understanding economics and finance',
        competenceId: 'financial-literacy',
        competenceName: 'Financial & Economic Literacy',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'fl-understand-1', text: 'I can explain basic economic concepts (supply and demand, market, trade).', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'fl-understand-2', text: 'I can describe the role of money in society.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'fl-understand-3', text: 'I can use economic concepts to make informed decisions.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'fl-understand-4', text: 'I can understand and create simple budgets and financial plans.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'fl-understand-5', text: 'I can develop financial strategies for value-creating activities.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'fl-understand-6', text: 'I can understand and use different financing models.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'fl-understand-7', text: 'I can develop innovative financial models and strategies.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'fl-understand-8', text: 'I can influence economic policy and practice.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'fl-budget',
        name: 'Budget and find funding',
        competenceId: 'financial-literacy',
        competenceName: 'Financial & Economic Literacy',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'fl-budget-1', text: 'I can explain that money can be earned, saved and spent.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'fl-budget-2', text: 'I can estimate the cost of a simple activity.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'fl-budget-3', text: 'I can create and manage a budget.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'fl-budget-4', text: 'I can identify potential sources of funding.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'fl-budget-5', text: 'I can develop comprehensive financial plans.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'fl-budget-6', text: 'I can secure funding from multiple sources.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'fl-budget-7', text: 'I can design innovative funding mechanisms.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'fl-budget-8', text: 'I can create sustainable financial ecosystems.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'mobilising-others',
    name: 'Mobilising Others',
    area: 'resources',
    areaName: 'Resources',
    description: 'Inspire, enthuse and get others on board.',
    threads: [
      {
        id: 'mo-inspire',
        name: 'Inspire and get inspired',
        competenceId: 'mobilising-others',
        competenceName: 'Mobilising Others',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'mo-inspire-1', text: 'I am enthusiastic and can get others interested in my ideas.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'mo-inspire-2', text: 'I can describe how some people inspire me.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'mo-inspire-3', text: 'I can inspire and enthuse others with my ideas and plans.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'mo-inspire-4', text: 'I can use storytelling and communication to get buy-in.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'mo-inspire-5', text: 'I can develop compelling communications that mobilise support.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'mo-inspire-6', text: 'I can build movements around ideas and causes.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'mo-inspire-7', text: 'I can inspire large-scale change and transformation.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'mo-inspire-8', text: 'I can develop a leadership approach that mobilises others at scale.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'mo-communicate',
        name: 'Communicate effectively',
        competenceId: 'mobilising-others',
        competenceName: 'Mobilising Others',
        area: 'resources',
        areaName: 'Resources',
        learningOutcomes: [
          { id: 'mo-communicate-1', text: 'I can express my ideas in a way that others understand.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'mo-communicate-2', text: 'I can present my ideas to a small group.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'mo-communicate-3', text: 'I can adapt my communication to different audiences.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'mo-communicate-4', text: 'I can use different media to communicate my ideas.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'mo-communicate-5', text: 'I can develop multi-channel communication strategies.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'mo-communicate-6', text: 'I can represent my activities effectively in public.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'mo-communicate-7', text: 'I can set communication standards for my field.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'mo-communicate-8', text: 'I can create new communication paradigms.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  // ===== INTO ACTION =====
  {
    id: 'taking-initiative',
    name: 'Taking the Initiative',
    area: 'action',
    areaName: 'Into Action',
    description: 'Go for it.',
    threads: [
      {
        id: 'ti-initiate',
        name: 'Take responsibility',
        competenceId: 'taking-initiative',
        competenceName: 'Taking the Initiative',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'ti-initiate-1', text: 'I am happy to take part in activities that make a contribution.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'ti-initiate-2', text: 'I can initiate activities that create value for me and for others.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'ti-initiate-3', text: 'I can take the initiative to address opportunities and challenges.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'ti-initiate-4', text: 'I can take responsibility for my value-creating activities.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'ti-initiate-5', text: 'I can champion initiative-taking in my organisation.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'ti-initiate-6', text: 'I can create environments that encourage people to take initiative.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'ti-initiate-7', text: 'I can drive major change initiatives.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'ti-initiate-8', text: 'I can pioneer new approaches to value creation.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'ti-work',
        name: 'Work independently',
        competenceId: 'taking-initiative',
        competenceName: 'Taking the Initiative',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'ti-work-1', text: 'I can work on a simple task on my own.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'ti-work-2', text: 'I can carry out a simple task without needing much help.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'ti-work-3', text: 'I can work independently on value-creating activities.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'ti-work-4', text: 'I can manage my work without constant supervision.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'ti-work-5', text: 'I can lead independent projects and initiatives.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'ti-work-6', text: 'I can create autonomous teams and structures.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'ti-work-7', text: 'I can develop autonomous organisations and systems.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'ti-work-8', text: 'I can create self-sustaining value-creation structures.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'planning-management',
    name: 'Planning & Management',
    area: 'action',
    areaName: 'Into Action',
    description: 'Prioritise, organise and follow up.',
    threads: [
      {
        id: 'pm-goals',
        name: 'Define goals',
        competenceId: 'planning-management',
        competenceName: 'Planning & Management',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'pm-goals-1', text: 'I can describe what I want to achieve.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'pm-goals-2', text: 'I can set simple goals for my activities.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'pm-goals-3', text: 'I can set SMART goals for my value-creating activities.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'pm-goals-4', text: 'I can translate long-term goals into short-term targets.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'pm-goals-5', text: 'I can develop comprehensive goal frameworks.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'pm-goals-6', text: 'I can align goals across teams and projects.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'pm-goals-7', text: 'I can set strategic goals for complex organisations.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'pm-goals-8', text: 'I can develop goal-setting systems that drive transformation.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'pm-plan',
        name: 'Plan and organise',
        competenceId: 'planning-management',
        competenceName: 'Planning & Management',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'pm-plan-1', text: 'I can carry out simple plans for value-creating activities.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'pm-plan-2', text: 'I can organise a simple activity from beginning to end.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'pm-plan-3', text: 'I can develop action plans for my value-creating activities.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'pm-plan-4', text: 'I can organise people and resources to implement my plans.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'pm-plan-5', text: 'I can develop comprehensive project plans.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'pm-plan-6', text: 'I can manage complex, multi-stakeholder projects.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'pm-plan-7', text: 'I can lead strategic planning processes.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'pm-plan-8', text: 'I can create planning frameworks for complex organisations.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'coping-uncertainty',
    name: 'Coping with Uncertainty, Ambiguity & Risk',
    area: 'action',
    areaName: 'Into Action',
    description: 'Make decisions dealing with uncertainty, ambiguity and risk.',
    threads: [
      {
        id: 'cu-uncertainty',
        name: 'Deal with uncertainty and ambiguity',
        competenceId: 'coping-uncertainty',
        competenceName: 'Coping with Uncertainty, Ambiguity & Risk',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'cu-uncertainty-1', text: 'I am not afraid of making mistakes while trying new things.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'cu-uncertainty-2', text: 'I can accept that there are things I don\'t know.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'cu-uncertainty-3', text: 'I can make decisions when the result of that decision is uncertain.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'cu-uncertainty-4', text: 'I can develop strategies for dealing with uncertain situations.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'cu-uncertainty-5', text: 'I can lead in uncertain and ambiguous situations.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'cu-uncertainty-6', text: 'I can create structures that help others deal with uncertainty.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'cu-uncertainty-7', text: 'I can develop strategies for thriving in highly uncertain environments.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'cu-uncertainty-8', text: 'I can pioneer new approaches to uncertainty management.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'cu-risk',
        name: 'Calculate and manage risk',
        competenceId: 'coping-uncertainty',
        competenceName: 'Coping with Uncertainty, Ambiguity & Risk',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'cu-risk-1', text: 'I can describe risks associated with a simple task.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'cu-risk-2', text: 'I can weigh up risks and benefits of different options.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'cu-risk-3', text: 'I can assess risks and make balanced risk-benefit decisions.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'cu-risk-4', text: 'I can develop risk management approaches.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'cu-risk-5', text: 'I can develop comprehensive risk management frameworks.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'cu-risk-6', text: 'I can lead risk management at organisational level.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'cu-risk-7', text: 'I can develop innovative approaches to risk management.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'cu-risk-8', text: 'I can create risk management systems for complex environments.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'working-with-others',
    name: 'Working with Others',
    area: 'action',
    areaName: 'Into Action',
    description: 'Team up, collaborate and network.',
    threads: [
      {
        id: 'wo-team',
        name: 'Team up',
        competenceId: 'working-with-others',
        competenceName: 'Working with Others',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'wo-team-1', text: 'I am willing to work in a group.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'wo-team-2', text: 'I can contribute to simple group activities.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'wo-team-3', text: 'I can work effectively in diverse teams.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'wo-team-4', text: 'I can contribute to team dynamics and resolve conflicts.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'wo-team-5', text: 'I can build and lead high-performing teams.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'wo-team-6', text: 'I can develop team structures for complex activities.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'wo-team-7', text: 'I can build inter-organisational teams for strategic initiatives.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'wo-team-8', text: 'I can create collaborative ecosystems.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'wo-network',
        name: 'Network',
        competenceId: 'working-with-others',
        competenceName: 'Working with Others',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'wo-network-1', text: 'I can interact with others and make new contacts.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'wo-network-2', text: 'I can describe the value of having a network of contacts.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'wo-network-3', text: 'I can build and maintain a network relevant to my activities.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'wo-network-4', text: 'I can leverage my network to access resources and opportunities.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'wo-network-5', text: 'I can develop strategic networking approaches.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'wo-network-6', text: 'I can build and manage professional networks.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'wo-network-7', text: 'I can create networking platforms and ecosystems.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'wo-network-8', text: 'I can leverage global networks for value creation.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  },
  {
    id: 'learning-through-experience',
    name: 'Learning Through Experience',
    area: 'action',
    areaName: 'Into Action',
    description: 'Learn by doing.',
    threads: [
      {
        id: 'le-reflect',
        name: 'Reflect',
        competenceId: 'learning-through-experience',
        competenceName: 'Learning Through Experience',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'le-reflect-1', text: 'I can recognise what I have learned from taking part in value-creating activities.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'le-reflect-2', text: 'I can describe what I have learned from simple experiences.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'le-reflect-3', text: 'I can use structured reflection to improve my performance.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'le-reflect-4', text: 'I can identify lessons learned from both successes and failures.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'le-reflect-5', text: 'I can create reflective practices for teams and organisations.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'le-reflect-6', text: 'I can develop learning frameworks based on experience.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'le-reflect-7', text: 'I can create knowledge management systems based on experiential learning.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'le-reflect-8', text: 'I can develop new theories from practice-based reflection.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      },
      {
        id: 'le-learn',
        name: 'Learn to learn',
        competenceId: 'learning-through-experience',
        competenceName: 'Learning Through Experience',
        area: 'action',
        areaName: 'Into Action',
        learningOutcomes: [
          { id: 'le-learn-1', text: 'I can identify things I want to learn.', level: 1, levelName: 'Discover', proficiencyBand: 'foundation' },
          { id: 'le-learn-2', text: 'I can look for learning opportunities.', level: 2, levelName: 'Explore', proficiencyBand: 'foundation' },
          { id: 'le-learn-3', text: 'I can plan my own learning journey.', level: 3, levelName: 'Experiment', proficiencyBand: 'intermediate' },
          { id: 'le-learn-4', text: 'I can learn from different sources and experiences.', level: 4, levelName: 'Dare', proficiencyBand: 'intermediate' },
          { id: 'le-learn-5', text: 'I can develop learning strategies for complex competence development.', level: 5, levelName: 'Improve', proficiencyBand: 'advanced' },
          { id: 'le-learn-6', text: 'I can create learning environments for others.', level: 6, levelName: 'Reinforce', proficiencyBand: 'advanced' },
          { id: 'le-learn-7', text: 'I can develop innovative learning approaches.', level: 7, levelName: 'Expand', proficiencyBand: 'expert' },
          { id: 'le-learn-8', text: 'I can create learning systems that drive continuous improvement.', level: 8, levelName: 'Transform', proficiencyBand: 'expert' },
        ]
      }
    ]
  }
]

// Helper function to get all learning outcomes as a flat list
export function getAllLearningOutcomes(): LearningOutcome[] {
  const outcomes: LearningOutcome[] = []
  for (const comp of ENTRECOMP_COMPETENCES) {
    for (const thread of comp.threads) {
      outcomes.push(...thread.learningOutcomes)
    }
  }
  return outcomes
}

// Helper function to get all threads
export function getAllThreads(): Thread[] {
  const threads: Thread[] = []
  for (const comp of ENTRECOMP_COMPETENCES) {
    threads.push(...comp.threads)
  }
  return threads
}

// Get statistics
export const ENTRECOMP_STATS = {
  areas: 3,
  competences: ENTRECOMP_COMPETENCES.length,
  threads: getAllThreads().length,
  learningOutcomes: getAllLearningOutcomes().length,
}
