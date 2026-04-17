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
    key: 'frontend',
    skills: [
      { name: 'TypeScript', level: 95, years: 7 },
      { name: 'React', level: 95, years: 7 },
      { name: 'Next.js', level: 90, years: 5 },
      { name: 'Vue.js', level: 80, years: 4 },
      { name: 'Tailwind CSS', level: 90, years: 4 },
      { name: 'HTML / CSS', level: 98, years: 9 },
    ],
  },
  {
    key: 'backend',
    skills: [
      { name: 'Node.js', level: 92, years: 8 },
      { name: 'NestJS', level: 85, years: 4 },
      { name: 'Express', level: 90, years: 7 },
      { name: 'GraphQL', level: 82, years: 4 },
      { name: 'REST API', level: 95, years: 9 },
      { name: 'Python', level: 96, years: 3 },
    ],
  },
  {
    key: 'ai',
    skills: [
      { name: 'OpenAI API', level: 90, years: 3 },
      { name: 'LangChain', level: 82, years: 2 },
      { name: 'Hugging Face', level: 75, years: 2 },
      { name: 'Pinecone', level: 78, years: 2 },
      { name: 'Prompt Engineering', level: 88, years: 3 },
      { name: 'RAG', level: 80, years: 2 },
    ],
  },
  {
    key: 'database',
    skills: [
      { name: 'PostgreSQL', level: 88, years: 7 },
      { name: 'MySQL', level: 85, years: 8 },
      { name: 'MongoDB', level: 78, years: 5 },
      { name: 'Redis', level: 80, years: 5 },
      { name: 'Prisma', level: 85, years: 3 },
      { name: 'Supabase', level: 85, years: 2 },
    ],
  },
  {
    key: 'cloud_devops',
    skills: [
      { name: 'AWS', level: 82, years: 6 },
      { name: 'Vercel', level: 90, years: 4 },
      { name: 'Docker', level: 82, years: 5 },
      { name: 'GitHub Actions', level: 85, years: 4 },
      { name: 'Nginx', level: 75, years: 5 },
    ],
  },
  {
    key: 'tools',
    skills: [
      { name: 'Git', level: 95, years: 9 },
      { name: 'Jest / Vitest', level: 85, years: 5 },
      { name: 'Playwright', level: 78, years: 3 },
      { name: 'Figma', level: 72, years: 3 },
      { name: 'Linux', level: 80, years: 7 },
    ],
  },
];
