import DashboardHeader from "../../ui/DashboardHeader";
import Stats from "./Stats";
import useProposals from "../proposals/useProposals";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();
  
  return (
    <div className="pt-8">
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
