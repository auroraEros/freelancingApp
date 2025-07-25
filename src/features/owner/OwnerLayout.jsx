import { HiCollection, HiDocumentText, HiHome } from "react-icons/hi";

import AppLayout from "../../ui/AppLayout";
import NavLinkListItem from "../../ui/NavLinkListItem";
import Sidebar from "../../ui/Sidebar";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <NavLinkListItem link="dashboard">
          <HiHome className="w-4 h-4" />
          <span>داشبورد</span>
        </NavLinkListItem>

        <NavLinkListItem link="projects">
          <HiCollection className="w-4 h-4" />
          <span>پروژه‌ها</span>
        </NavLinkListItem>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
