import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../services/authService";

export function useGetOtp() {
  const { isPending: isGettingOtp, mutateAsync: gettingOtp } = useMutation({
    mutationFn: getOtp,
  });
  return { isGettingOtp, gettingOtp };
}
