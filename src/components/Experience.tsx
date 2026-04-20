import { useExperience } from "../hooks/useExperience";
import { useSkills } from "../hooks/useSkills";

function Experience() {
  const { data: experiences, isLoading: expLoading, isError: expError } = useExperience();
  const { data: skillCategories, isLoading: skillsLoading, isError: skillsError } = useSkills();

  return (
    <div className="space-y-6">
      {/* Work Experience Section */}
      <section className="bg-white p-4 rounded-lg shadow-lg text-black md:p-6">
        <h2 className="text-3xl mb-6 pb-2 border-b-2 border-stone-100">
          Work Experience
        </h2>

        {expLoading && <p className="text-gray-400 animate-pulse">Loading experience...</p>}
        {expError && <p className="text-red-500">Could not load experience data.</p>}

        <div className="space-y-3">
          {experiences?.map((exp) => (
            <div
              key={exp._id}
              className="p-4 rounded-lg shadow-md bg-slate-50"
            >
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

      {/* Skills Section */}
      <section className="bg-white p-4 rounded-lg shadow-lg text-black md:p-6">
        <h2 className="text-3xl pb-2 border-b-2">Skills</h2>

        {skillsLoading && <p className="text-gray-400 animate-pulse mt-4">Loading skills...</p>}
        {skillsError && <p className="text-red-500 mt-4">Could not load skills data.</p>}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {skillCategories?.map((category) => (
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
  );
}

export default Experience;
