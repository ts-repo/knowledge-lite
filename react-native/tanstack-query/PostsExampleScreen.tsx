import React from "react";
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useCreatePost, usePosts } from "./usePosts";

export function PostsExampleScreen() {
  const postsQuery = usePosts();
  const createPostMutation = useCreatePost();

  const handleCreatePost = () => {
    createPostMutation.mutate({
      title: "Sample post",
      body: "This is a TanStack Query mutation sample.",
      userId: 1,
    });
  };

  if (postsQuery.isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text>読み込み中...</Text>
      </View>
    );
  }

  if (postsQuery.isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>APIの取得に失敗しました。</Text>
        <Button title="再読み込み" onPress={() => postsQuery.refetch()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>

      <Button
        title={createPostMutation.isPending ? "送信中..." : "POSTサンプル"}
        onPress={handleCreatePost}
        disabled={createPostMutation.isPending}
      />

      <FlatList
        data={postsQuery.data?.slice(0, 20) ?? []}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  list: {
    paddingVertical: 12,
    gap: 12,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#F8FAFC",
    gap: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  body: {
    color: "#475569",
    lineHeight: 20,
  },
  error: {
    color: "#DC2626",
    fontWeight: "700",
  },
});
