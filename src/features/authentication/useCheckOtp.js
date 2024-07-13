import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";

export function useCheckOtp() {
  const { isPending: isCheckingOtp, mutateAsync: checkingOtp } = useMutation({
    mutationFn: checkOtp,
  });
  return { isCheckingOtp, checkingOtp };
}
