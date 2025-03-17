import Button from "./Button";

function Experience() {
  return (
    <div>
      {/* Experience Section */}
      <section className=" bg-white p-3 rounded-lg shadow-lg text-black">
        <h2 className="text-3xl mb-6 pb-2 border-b-2 border-s-stone-100 flex justify-between">
          Work Experience
        </h2>
        <Button className="underline" href="/" children="go back" />
        <br />
        <br />
        <div className="space-y-3">
          {/* Trivore */}
          <div className="p-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl text-orange-300 font-semibold">
              Software Developer
            </h3>
            <div className="text-slate-300  font-bold text-lg">Trivore</div>
            <div className="text-gray-600 italic mb-4">
              September 2024 - January 2025
            </div>
            <ul className="space-y-1">
              {[
                "Developed responsive websites for client based basis.",
                "Developing software depending in Nextjs architecture.",
                "Collaborated with design team on UI/UX improvements.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-slate-300 mr-2">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Marimekko */}
          <div className="p-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl text-orange-300 font-semibold">
              Front-end developer and SCRUM master
            </h3>
            <div className="text-slate-300 font-bold text-lg">Marimekko</div>
            <div className="text-gray-600 italic mb-4">
              February 2019 - April 2024
            </div>
            <ul className="space-y-1">
              {[
                "In-house Frontend developer and collboration with backend development. ",
                "Development of key features for online store resulting in user growth over 5 years.",
                "Scrum master of developers across multiple projects.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-slate-300  mr-2">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Nokia */}
          <div className="p-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl text-orange-300 font-semibold">
              Front-end developer
            </h3>
            <div className="text-slate-300 font-bold text-lg">
              Comptel/Nokia
            </div>
            <div className="text-gray-600 italic mb-4">
              August 2017 - February 2019
            </div>
            <ul className="space-y-1">
              {[
                "UI development for telecommunications and network services.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-slate-300  mr-2">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Virta */}
          <div className="p-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl text-orange-300 font-semibold">
              UI developer
            </h3>
            <div className="text-slate-300 font-bold text-lg">Virta ltd.</div>
            <div className="text-gray-600 italic mb-4">
              November 2016 - August 2017
            </div>
            <ul className="space-y-1">
              {[
                "UI design and development for electric vehicles users platform.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-slate-300  mr-2">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
            <div
              key={index}
              className="p-6 rounded-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl  font-semibold mb-2 pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="text-orange-300 mr-2 text-lg">•</span>
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
