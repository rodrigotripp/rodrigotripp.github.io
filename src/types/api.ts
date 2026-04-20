export interface Experience {
  _id: string;
  title: string;
  company: string;
  date: string;
  duties?: string[];
  technologies?: string[];
  order: number;
}

export interface SkillCategory {
  _id: string;
  title: string;
  skills: string[];
  order: number;
}
