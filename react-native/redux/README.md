# Redux Sample Templates

React Native / TypeScript で Redux Toolkit を使うときの最小テンプレートです。

## 目的

- Redux の読み書きをすぐ試せる
- store / slice / hooks / screen の役割を分けて理解できる
- 業務コードを読むときの入口にする

## 想定パッケージ

```bash
npm install @reduxjs/toolkit react-redux
```

## ファイル構成例

```text
src/
  store/
    store.ts
    hooks.ts
  features/
    counter/
      counterSlice.ts
      CounterExampleScreen.tsx
    user/
      userSlice.ts
```

## 読む順番

1. `store.ts`
2. `counterSlice.ts`
3. `hooks.ts`
4. `CounterExampleScreen.tsx`
5. `userSlice.ts`

## よく使う考え方

- `useAppSelector`: Redux から値を読む
- `useAppDispatch`: Redux に更新命令を出す
- `slice`: state と reducer をまとめる場所
- `action`: reducer に渡す更新命令
- `store`: アプリ共通の状態置き場
