import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, fetchPost, fetchPosts, type CreatePostInput } from "./postsApi";
import { queryKeys } from "./queryKeys";

export function usePosts() {
  return useQuery({
    queryKey: queryKeys.posts,
    queryFn: fetchPosts,
  });
}

export function usePost(id: number) {
  return useQuery({
    queryKey: queryKeys.post(id),
    queryFn: () => fetchPost(id),
    enabled: id > 0,
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreatePostInput) => createPost(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts });
    },
  });
}
