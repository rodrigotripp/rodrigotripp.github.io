import { sanityClient } from "../lib/sanity";
import type { Experience, SkillCategory } from "../types/api";
import { useLoaderData } from "react-router";

const experienceQuery = `*[_type == "experience"] | order(order asc) {
  _id, title, company, date, duties, technologies, order
}`;

const skillsQuery = `*[_type == "skillCategory"] | order(order asc) {
  _id, title, skills, order
}`;

export async function loader() {
  const [experiences, skillCategories] = await Promise.all([
    sanityClient.fetch<Experience[]>(experienceQuery),
    sanityClient.fetch<SkillCategory[]>(skillsQuery),
  ]);
  return { experiences, skillCategories };
}

export default function About() {
  const { experiences, skillCategories } = useLoaderData<typeof loader>();

  return (
    <section className="p-4 md:p-8 w-full">
      <div className="space-y-6">
        <div className="flex justify-end print:hidden">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition-colors text-sm font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Download PDF
          </button>
        </div>

        <section id="print-content" className="bg-white p-4 rounded-lg shadow-lg text-black md:p-6">
          <h2 className="text-3xl mb-6 pb-2 border-b-2 border-stone-100">
            Work Experience
          </h2>
          <div className="space-y-3">
            {experiences.map((exp) => (
              <div key={exp._id} className="p-4 rounded-lg shadow-md bg-slate-50">
                <h3 className="text-xl text-blue-600 font-semibold">{exp.title}</h3>
                <div className="text-black font-bold text-lg">{exp.company}</div>
                <div className="text-gray-600 italic mb-4">{exp.date}</div>
                <ul className="space-y-1">
                  {exp.duties?.map((duty) => (
                    <li key={duty} className="flex items-start">
                      <span className="text-slate-300 mr-2">→</span>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-4 rounded-lg shadow-lg text-black md:p-6">
          <h2 className="text-3xl pb-2 border-b-2">Skills</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillCategories.map((category) => (
              <div key={category._id} className="p-6 rounded-lg shadow-md bg-slate-50">
                <h3 className="text-xl font-semibold mb-2 pb-2 border-b border-gray-200">
                  {category.title}
                </h3>
                <ul>
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="text-blue-600 mr-2 text-lg">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
