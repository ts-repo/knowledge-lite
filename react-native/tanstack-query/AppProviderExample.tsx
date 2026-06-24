import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PostsExampleScreen } from "./PostsExampleScreen";
import { queryClient } from "./queryClient";

export default function AppProviderExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsExampleScreen />
    </QueryClientProvider>
  );
}
