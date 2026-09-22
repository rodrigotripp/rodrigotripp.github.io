import { Outlet, useRouteLoaderData } from "react-router";
import { sanityClient } from "../lib/sanity";
import type { SiteSettings } from "../types/api";
import NavigationMenu from "../components/NavigationMenu";
import { GlassDiv } from "../components/GlassDiv";

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  name,
  photo { asset -> { url }, hotspot },
  bio,
  currentEmployer,
  location,
  socialLinks
}`;

export async function loader() {
  const settings: SiteSettings = await sanityClient.fetch(siteSettingsQuery);
  return { settings };
}

export function useSidebarData() {
  const data = useRouteLoaderData<typeof loader>("routes/_layout");
  return data?.settings;
}

function Sidebar() {
  const settings = useSidebarData();

  const name = settings?.name ?? "Rodrigo Tripp";
  const bio = settings?.bio ?? "";
  const currentEmployer = settings?.currentEmployer;
  const photoUrl = settings?.photo?.asset?.url;

  return (
    <aside className="flex flex-col shrink-1 gap-7 m-4 md:m-8">
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
      <NavigationMenu />
    </aside>
  );
}

export default function SidebarLayout() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full min-h-full">
      <Sidebar />
      <Outlet />
    </div>
  );
}
