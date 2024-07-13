import {  Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { HiCollection, HiHome } from "react-icons/hi";
import NavLinkListItem from "./NavLinkListItem";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar>
        <NavLinkListItem link="/owner/dashboard">
          <HiHome className="w-4 h-4" />
          <span>داشبورد</span>
        </NavLinkListItem>

        <NavLinkListItem link="/owner/projects">
          <HiCollection className="w-4 h-4" />
          <span>پروژه ها</span>
        </NavLinkListItem>
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
