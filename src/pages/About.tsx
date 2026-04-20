import Description from "../components/Description";
import Name from "../components/Name";
import NavigationMenu from "../components/NavigationMenu";
import Experience from "../components/Experience";

function About() {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row w-full">
      <div className="flex flex-col gap-7 m-8">
        <Name />
        <Description />
        <NavigationMenu />
      </div>
      <section className="p-4 md:p-8 w-full">
        <Experience />
      </section>
    </div>
  );
}

export default About;
