# Navigation Cheatsheet

## Stack

画面を積み重ねるナビゲーションです。詳細画面や設定画面に向いています。

## Tab

下部タブなど、主要画面を切り替えるナビゲーションです。

## navigate / push / goBack

~~~tsx
navigation.navigate('Setting');
navigation.push('Detail', { id });
navigation.goBack();
~~~

## useFocusEffect

戻ってきた時に再取得したい処理に使います。

## useEffectとの違い

- useEffect: componentのmountや依存値変更で発火
- useFocusEffect: 画面がfocusされた時に発火

## ホーム → 設定 → ホームに戻る時の注意点

設定変更後にホームの表示を更新したい場合は、ホーム側でuseFocusEffectを使うと確認しやすいです。


