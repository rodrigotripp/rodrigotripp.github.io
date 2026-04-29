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

export interface SiteSettings {
  name: string;
  photo?: { asset: { url: string }; hotspot?: { x: number; y: number } };
  bio?: string;
  currentEmployer?: string;
  location?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    soundcloud?: string;
  };
}
