import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../features/authentication/useLogout";
import Loader from "./Loader";

function LogoutButton({ className, label = "" }) {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loader />
  ) : (
    <button
      className={`${className} transiton-all duration-300`}
      onClick={logout}
    >
      <HiArrowRightOnRectangle className="w-5 h-5" />
      {label}
    </button>
  );
}

export default LogoutButton;
