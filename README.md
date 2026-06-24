# Knowledge Lite

React Native / TypeScript の学習・実務メモ集です。

初心者がReact Native案件で迷いやすい state、props、useEffect、navigation、Redux、debugging、VSCode操作を、短く読み返せる形でまとめています。

## Included

- React Native cheatsheet
- TypeScript cheatsheet
- Redux cheatsheet
- Redux sample templates
- TanStack Query sample templates
- Navigation cheatsheet
- Debugging cheatsheet
- Styling cheatsheet
- VSCode cheatsheet
- VSCode snippets
- Snippet registration guide

## Not Included

この公開版には、非公開の事業メモ、案件固有情報、個人情報は含めません。

## Structure

~~~text
knowledge-lite/
├── README.md
├── react-native/
│   ├── react-native-cheatsheet.md
│   ├── react-cheatsheet.md
│   ├── redux-cheatsheet.md
│   ├── redux/
│   │   ├── README.md
│   │   ├── store.ts
│   │   ├── hooks.ts
│   │   ├── counterSlice.ts
│   │   ├── userSlice.ts
│   │   ├── CounterExampleScreen.tsx
│   │   └── AppProviderExample.tsx
│   ├── tanstack-query/
│   │   ├── README.md
│   │   ├── apiClient.ts
│   │   ├── postsApi.ts
│   │   ├── queryClient.ts
│   │   ├── queryKeys.ts
│   │   ├── usePosts.ts
│   │   ├── PostsExampleScreen.tsx
│   │   └── AppProviderExample.tsx
│   ├── navigation-cheatsheet.md
│   ├── debugging-cheatsheet.md
│   ├── typescript-cheatsheet.md
│   ├── vscode-cheatsheet.md
│   └── styling-cheatsheet.md
└── vscode/
    ├── snippet-guide.md
    ├── react-native.code-snippets
    └── typescript-react-native.code-snippets
~~~

## How to Use

~~~bash
code /path/to/knowledge-lite
~~~

必要なcheatsheetを開いて、React Native開発中の確認メモとして使います。

Reduxの雛形は `react-native/redux/README.md`、API呼び出しの雛形は `react-native/tanstack-query/README.md` から確認できます。

VSCode snippetsを登録したい場合は、`vscode/snippet-guide.md` を見てください。

## Privacy

- 個人情報は入れない
- 実案件名や社内URLは入れない
- 実ID/PWは入れない
- 非公開メモや内部向け情報は入れない


