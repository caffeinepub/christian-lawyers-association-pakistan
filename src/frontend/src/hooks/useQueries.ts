import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetNewsEvents() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["newsEvents"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllNewsEvents();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetLeadershipProfiles() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["leadershipProfiles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLeadershipProfiles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(name, email, message);
    },
  });
}
