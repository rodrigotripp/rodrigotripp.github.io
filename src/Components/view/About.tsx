import Experience from "../Experience";

function About() {
  return (
    <main className="text-slate-200 ">
      <div className="flex flex-col md:flex-row-reverse h-1/3">
        <Experience />
      </div>
    </main>
  );
}

export default About;
