import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Stats from "./Stats";
import { useUsers } from "./useUsers";
import useProposals from "../../features/proposals/useProposals";
import Loader from "../../ui/Loader";

function DashboardLayout() {
  const { isLoading: isLoadingProjects, projects = [] } = useProjects();
  const { isLoading: isLoadingProposals, proposals = [] } = useProposals();
  const { isLoading: isLoadingUsers, users = [] } = useUsers();

  if (isLoadingProjects || isLoadingProposals || isLoadingUsers)
    return <Loader />;

  return (
    <div className="pt-8">
      <DashboardHeader text="سایت" />
      <Stats
        proposals={proposals.length}
        users={users.length}
        projects={projects.length}
      />
    </div>
  );
}

export default DashboardLayout;
