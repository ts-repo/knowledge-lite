export const queryKeys = {
  posts: ["posts"] as const,
  post: (id: number) => ["posts", id] as const,
};
