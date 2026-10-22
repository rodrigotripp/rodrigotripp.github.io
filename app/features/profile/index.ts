import { useRouteLoaderData } from "react-router";
import type { SiteSettings } from "../../types/api";

export { loadSiteSettings } from "./siteSettings";
export { ProfileSidebar } from "./ProfileSidebar";

export function useSidebarData() {
  const data = useRouteLoaderData<{ settings?: SiteSettings | null }>(
    "routes/_layout",
  );

  return data?.settings;
}
