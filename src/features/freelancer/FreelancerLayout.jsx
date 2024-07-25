import { HiCollection, HiDocumentText, HiHome } from "react-icons/hi";

import AppLayout from "../../ui/AppLayout";
import NavLinkListItem from "../../ui/NavLinkListItem";
import Sidebar from "../../ui/Sidebar";
import Logo from "../../ui/Logo";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <Logo />

        <NavLinkListItem link="dashboard">
          <HiHome className="w-4 h-4" />
          <span>داشبورد</span>
        </NavLinkListItem>

        <NavLinkListItem link="projects">
          <HiCollection className="w-4 h-4" />
          <span>پروژه‌ها</span>
        </NavLinkListItem>

        <NavLinkListItem link="proposals">
          <HiDocumentText className="w-4 h-4" />
          <span>درخواست‌ها</span>
        </NavLinkListItem>
      
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
