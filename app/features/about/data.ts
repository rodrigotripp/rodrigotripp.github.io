import { fetchSanityOrFallback } from "../../lib/sanity";
import type { Experience, SkillCategory } from "../../types/api";

export const experienceQuery = `*[_type == "experience"] | order(order asc) {
  _id, title, company, date, duties, technologies, order
}`;

export const skillsQuery = `*[_type == "skillCategory"] | order(order asc) {
  _id, title, skills, order
}`;

export async function loadAboutPageData() {
  const [experiences, skillCategories] = await Promise.all([
    fetchSanityOrFallback<Experience[]>(experienceQuery, []),
    fetchSanityOrFallback<SkillCategory[]>(skillsQuery, []),
  ]);

  return { experiences, skillCategories };
}
