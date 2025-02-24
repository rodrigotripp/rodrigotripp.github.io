import me from "../../img/me_marimekko.jpeg";
import Image from "../Image";
import Experience from "../Experience";

function About() {
  return (
    <main className="text-slate-200 ">
      <div className="flex flex-col md:flex-row-reverse h-1/3">
        <div className="md:w-1/2">
          <Image img={me} />
        </div>
        <Experience />
      </div>
    </main>
  );
}

export default About;
