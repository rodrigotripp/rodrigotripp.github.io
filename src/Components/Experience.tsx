import Button from "./Button";

import { workExperience } from "../data";

function Experience() {
  return (
    <div>
      {/* Experience Section */}
      <section className=" bg-white p-3 rounded-lg shadow-lg text-black">
        <h2 className="text-3xl mb-6 pb-2 border-b-2 border-s-stone-100 flex justify-between">
          Work Experience
        </h2>
        <Button className="underline" href="/" children="Close X" />
        <br />
        <br />
        <div className="space-y-3">
          {workExperience.map((exp, ind) => (
            <div
              key={`${ind}_${exp.company}`}
              className="p-2 rounded-lg shadow-md bg-slate-50"
            >
              <h3 className="text-xl text-blue-600 font-semibold">
                {exp.title}
              </h3>
              <div className="text-black font-bold text-lg">{exp.company}</div>
              <div className="text-gray-600 italic mb-4">{exp.date}</div>
              <ul className="space-y-1">
                {exp.duties?.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-slate-300 mr-2">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-3 rounded-lg shadow-lg bg-white text-black">
        <h2 className="text-3xl pb-2 border-b-2 ">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Programming Languages",
              skills: ["JavaScript", "Typescript", "Java", "PHP"],
            },
            {
              title: "Frontend Development",
              skills: ["React", "Vue.js", "NextJs", "HTML5", "CSS3/SASS"],
            },
            {
              title: "Backend Development",
              skills: ["Node.js", "Express", "MySQL"],
            },
            {
              title: "Tools & Technologies",
              skills: ["Git", "Docker", "Magento"],
            },
          ].map((category, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md bg-slate-50">
              <h3 className="text-xl bg-slate-50font-semibold mb-2 pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
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
