# Redux Cheatsheet

## Reduxとは

Redux = アプリ共通の状態置き場です。ログインユーザー、設定、ABテスト条件など、複数画面で使う値を置きます。

## 用語

- store: Redux全体の箱
- reducer: 状態更新ルール
- action: 更新命令
- dispatch: Reduxへ更新命令を出す
- useSelector: Reduxから値を読む

## useSelector

~~~tsx
const value = useSelector((state: RootState) => state.feature.value);
~~~

## dispatch

~~~tsx
const dispatch = useDispatch();
dispatch(setValue('nextValue'));
~~~

## コードを追う順番

1. useSelectorで読んでいる値を探す
2. slice / reducerを探す
3. action名を探す
4. dispatchしている箇所を全文検索する
5. APIレスポンスや画面復帰時の更新を確認する

## VSCodeでReduxコードを追う手順

- action名で全文検索
- slice名でファイル検索
- useSelectorのstateパスを確認
- 定義ジャンプでreducerへ移動
- dispatch周辺にconsole.logを置く

## 計測イベントで古い値が送られる例

1. 画面表示時にview計測が走る
2. その時点のRedux値が古い
3. 後からAPIで値が更新される
4. 計測ログには古い値が送られる

対策: 計測直前の値をconsole.logし、値更新と計測の順番を確認する。


