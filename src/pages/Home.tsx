import turku from "../img/turku.jpeg";
import Description from "../components/Description";
import Name from "../components/Name";
import Image from "../components/Image";
import NavigationMenu from "../components/NavigationMenu";
import { GlassDiv } from "../components/GlassDiv";

function Home() {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row w-full">
      <div className="flex flex-col gap-7 m-8">
        <GlassDiv>
          <Name />
        </GlassDiv>
        <GlassDiv>
          <Description />
        </GlassDiv>
        <NavigationMenu />
      </div>
      <Image img={turku} />
    </div>
  );
}

export default Home;
