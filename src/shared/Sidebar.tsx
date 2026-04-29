import NavigationMenu from "../components/NavigationMenu";
import { GlassDiv } from "../components/GlassDiv";
import { useSiteSettings } from "../hooks/useSiteSettings";

function Sidebar() {
  const { data } = useSiteSettings();

  const name = data?.name ?? "Rodrigo Tripp";
  const bio = data?.bio ?? "Web developer with a strong UX and UI development experience.\n\nI have worked in the past for Nokia, Marimekko and more.\n\nMexican, living in Helsinki.\n\nBicycles, cycling and music keep me busy.";
  const currentEmployer = data?.currentEmployer;
  const photoUrl = data?.photo?.asset?.url;

  return (
    <aside className="flex flex-col gap-7 m-8">
      <GlassDiv>
        {photoUrl && (
          <img
            src={photoUrl}
            alt={name}
            className="w-24 h-24 rounded-full object-cover mb-3"
          />
        )}
        <p className="text-teal-800 text-3xl">
          <strong>{name}</strong>
        </p>
      </GlassDiv>
      <GlassDiv>
        <div className="text-teal-800 text-xl whitespace-pre-line">
          {bio}
          {currentEmployer && (
            <>
              <br />
              <br />
              <p><b>Working for {currentEmployer}</b></p>
            </>
          )}
        </div>
      </GlassDiv>
      <NavigationMenu />
    </aside>
  );
}

export default Sidebar;
