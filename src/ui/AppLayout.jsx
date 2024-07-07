import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { HiCollection, HiHome } from "react-icons/hi";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar>
        <li>
          <NavLink className="flex items-center gap-x-2 hover:bg-primary-100/50">
            <HiHome className="w-4 h-4 text-primary-900" />
            <span className="text-secondary-500">خانه</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-x-2">
            <HiCollection className="w-4 h-4 text-primary-900" />
            <span className="text-secondary-800">پروژه ها</span>
          </NavLink>
        </li>
      </Sidebar>
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12 bg-red-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
