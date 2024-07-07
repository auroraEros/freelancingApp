import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../services/authService";

export function useCompleteProfile() {
  const { isPending: isCompletingProfile, mutateAsync: completingProfile } =
    useMutation({
      mutationFn: completeProfile,
    });
  return { isCompletingProfile, completingProfile };
}
