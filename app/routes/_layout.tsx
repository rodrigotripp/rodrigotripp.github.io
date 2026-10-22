import { Outlet } from "react-router";
import NavigationMenu from "../components/NavigationMenu";
import { loadSiteSettings, ProfileSidebar } from "../features/profile";

export async function loader() {
  const settings = await loadSiteSettings();
  return { settings };
}

function Sidebar() {
  return (
    <aside className="flex flex-col shrink-1 gap-7 m-4 md:m-8">
      <ProfileSidebar />
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
