export interface Skill {
  name: string;
  level: number;
  years: number;
}

export interface SkillCategory {
  key: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'ai',
    skills: [
      { name: 'RAG', level: 94, years: 3 },
      { name: 'LLM APIs', level: 93, years: 5 },
      { name: 'AI Agents', level: 90, years: 2 },
      { name: 'Prompt Engineering', level: 92, years: 5 },
      { name: 'LangChain', level: 88, years: 3 },
      { name: 'Embeddings', level: 90, years: 5 },
      { name: 'Vector Search', level: 88, years: 5 },
      { name: 'LLM Evaluation', level: 86, years: 3 },
    ],
  },
  {
    key: 'frontend',
    skills: [
      { name: 'TypeScript', level: 93, years: 8 },
      { name: 'JavaScript', level: 95, years: 21 },
      { name: 'React', level: 92, years: 8 },
      { name: 'Next.js', level: 90, years: 4 },
      { name: 'Vue.js', level: 80, years: 3 },
      { name: 'HTML / CSS', level: 96, years: 21 },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Python', level: 94, years: 5 },
      { name: 'FastAPI', level: 92, years: 5 },
      { name: 'Node.js', level: 88, years: 8 },
      { name: 'Ruby on Rails', level: 86, years: 8 },
      { name: 'REST API', level: 95, years: 21 },
    ],
  },
  {
    key: 'database',
    skills: [
      { name: 'PostgreSQL', level: 92, years: 13 },
      { name: 'MySQL', level: 88, years: 21 },
      { name: 'MongoDB', level: 78, years: 8 },
      { name: 'Redis', level: 86, years: 13 },
      { name: 'Vector Databases', level: 88, years: 5 },
    ],
  },
  {
    key: 'cloud_devops',
    skills: [
      { name: 'AWS', level: 88, years: 8 },
      { name: 'Docker', level: 88, years: 8 },
      { name: 'GitHub Actions', level: 86, years: 8 },
      { name: 'Linux', level: 88, years: 21 },
      { name: 'Nginx', level: 82, years: 13 },
    ],
  },
];
