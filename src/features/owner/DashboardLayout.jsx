import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

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
