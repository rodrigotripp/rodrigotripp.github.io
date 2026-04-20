import NavigationMenu from "../components/NavigationMenu";
import { GlassDiv } from "../components/GlassDiv";

function Sidebar() {
  return (
    <aside className="flex flex-col gap-7 m-8">
      <GlassDiv>
        <p className="text-teal-800 text-3xl">
          <strong>Rodrigo Tripp</strong>
        </p>
      </GlassDiv>
      <GlassDiv>
        <div className="text-teal-800 text-xl">
          <p>
            Web developer with a strong UX and UI development experience.
            <br />
            <br />
            I have worked in the past for Nokia, Marimekko and more.
          </p>
          <br />
          Mexican, living in Helsinki.
          <br />
          <p>Bicycles, cycling and music keep me busy.</p>
          <br />
          <br />
          <p>
            <b>Working for Elisa Oyj</b>
          </p>
        </div>
      </GlassDiv>
      <NavigationMenu />
    </aside>
  );
}

export default Sidebar;
