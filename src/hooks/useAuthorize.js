import { useLocation } from "react-router-dom";
import { useUser } from "./useUser";

export function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();
  const isAuthenticated = user ? true : false;
  const isVerified = Number(user?.status) === 2 ? true : false;
  const isAuthorized =
    isAuthenticated && pathname.includes(user?.role?.toLowerCase());

  return { isLoading, user, isAuthenticated, isAuthorized,isVerified };
}
