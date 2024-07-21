import { useNavigate } from "react-router-dom";
import { useAuthorize } from "../hooks/useAuthorize";
import NoAccess from "../pages/NoAccess";
import Loader from "./Loader";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, isAuthorized, isVerified } =
    useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است.");
      navigate("/complete-profile");
    }
    if (!isAuthorized && !isLoading) navigate("/no-access", { replace: true });
  }, [navigate, isAuthenticated, isAuthorized, isLoading, isVerified]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
