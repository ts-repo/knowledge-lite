import { apiClient } from "./apiClient";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CreatePostInput = {
  title: string;
  body: string;
  userId: number;
};

export function fetchPosts() {
  return apiClient<Post[]>("/posts");
}

export function fetchPost(id: number) {
  return apiClient<Post>(`/posts/${id}`);
}

export function createPost(input: CreatePostInput) {
  return apiClient<Post>("/posts", {
    method: "POST",
    body: JSON.stringify(input),
  });
}
