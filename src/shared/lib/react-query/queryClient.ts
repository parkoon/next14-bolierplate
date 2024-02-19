"use client";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  },
});
