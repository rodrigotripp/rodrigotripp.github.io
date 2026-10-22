import { GlassDiv } from "../../components/GlassDiv";
import { useSidebarData } from "./index";

export function ProfileSidebar() {
  const settings = useSidebarData();

  const name = settings?.name ?? "Rodrigo Tripp";
  const bio = settings?.bio ?? "";
  const currentEmployer = settings?.currentEmployer;
  const photoUrl = settings?.photo?.asset?.url;

  return (
    <>
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
              <p>
                <b>Working for {currentEmployer}</b>
              </p>
            </>
          )}
        </div>
      </GlassDiv>
    </>
  );
}
