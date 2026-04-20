import Sidebar from "../shared/Sidebar";
import Experience from "../components/Experience";

function About() {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row w-full">
      <Sidebar />
      <section className="p-4 md:p-8 w-full">
        <Experience />
      </section>
    </div>
  );
}

export default About;
