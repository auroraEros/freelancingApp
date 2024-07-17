import { HiCollection, HiDocumentText, HiHome } from "react-icons/hi";

import AppLayout from "../../ui/AppLayout";
import NavLinkListItem from "../../ui/NavLinkListItem";
import Sidebar from "../../ui/Sidebar";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <NavLinkListItem link="/owner/dashboard">
          <HiHome className="w-4 h-4" />
          <span>داشبورد</span>
        </NavLinkListItem>

        <NavLinkListItem link="/owner/projects">
          <HiCollection className="w-4 h-4" />
          <span>پروژه‌ها</span>
        </NavLinkListItem>

        <NavLinkListItem link="/owner/proposals">
          <HiDocumentText className="w-4 h-4" />
          <span>درخواست‌ها</span>
        </NavLinkListItem>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
