# TanStack Query Sample Templates

React Native / TypeScript で API 呼び出しを扱うための TanStack Query 最小テンプレートです。

## 目的

- API取得、ローディング、エラー、再読み込みをすぐ試せる
- mutation でPOST/更新系の雛形を作れる
- ReduxとAPIキャッシュの役割を分けて理解できる

## 想定パッケージ

```bash
npm install @tanstack/react-query
```

## ファイル構成例

```text
src/
  api/
    apiClient.ts
    postsApi.ts
  query/
    queryClient.ts
    queryKeys.ts
  screens/
    PostsExampleScreen.tsx
  AppProviderExample.tsx
```

## Reduxとの使い分け

- Redux: ログイン状態、画面横断のUI状態、ローカル状態
- TanStack Query: API取得結果、キャッシュ、再取得、通信状態

## 注意

サンプルAPIには `jsonplaceholder.typicode.com` を使っています。実案件では環境変数や設定ファイルからAPI URLを読む形にしてください。
