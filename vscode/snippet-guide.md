# VSCode Snippet Guide

チートシートで何度も使うコードは、VSCode snippetsにすると入力時間を減らせます。

## 登録方法

VSCodeで以下を開きます。

~~~text
Code > Settings > Configure User Snippets
~~~

TypeScript / React Native用なら、以下のどちらかに登録します。

~~~text
typescriptreact.json
javascriptreact.json
~~~

このリポジトリでは、コピーしやすい形で以下にまとめています。

~~~text
vscode/typescript-react-native.code-snippets
vscode/react-native.code-snippets
~~~

## 使い方

1. 登録したいsnippetファイルを開く
2. 中身をVSCodeのUser Snippetsへコピー
3. React Nativeのtsxファイルでprefixを入力
4. Tab / Enterで展開

## よく使うprefix

| prefix | 用途 |
| --- | --- |
| clg | console.log |
| usee | useEffect |
| usf | useFocusEffect |
| usecb | useCallback |
| usem | useMemo |
| usel | useSelector |
| used | useDispatch |
| rnc | React Native component |
| rnsc | Screen component |
| rnflat | FlatList |
| rninput | TextInput |
| rstyle | StyleSheet.create |
| asyncfn | async function |

## チートシートからsnippet化する考え方

- 3回以上書くコードはsnippet候補
- ファイル名や変数名だけ変わるコードはsnippet向き
- 長いimport文やhookの括弧構造はsnippet化すると楽
- 調査用console.logはlabel付きにする

## 注意

- project-specific values、URL、ID、private valuesをsnippetに入れない
- 公開リポジトリに置くsnippetは汎用名だけにする
- 複雑すぎるsnippetより、短く確実に展開できるsnippetを優先する

