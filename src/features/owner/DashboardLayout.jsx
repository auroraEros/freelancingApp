import useOwnerProjects from "../projects/useOwnerProjects";
import Stats from "./Stats";
import DashboardHeader from "../../ui/DashboardHeader"

function DashboardLayout() {
  const { isLoading, projects = [] } = useOwnerProjects();

  return (
    <div className="pt-8">
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
