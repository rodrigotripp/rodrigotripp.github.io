import { Outlet } from "react-router";
import Sidebar from "../shared/Sidebar";

function SidebarLayout() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full h-full">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default SidebarLayout;
