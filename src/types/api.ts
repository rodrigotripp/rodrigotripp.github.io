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

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content?: import("@portabletext/react").PortableTextBlock[];
  tags?: string[];
  publishedAt: string;
  order: number;
}
