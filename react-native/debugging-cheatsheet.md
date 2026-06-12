# Debugging Cheatsheet

## console.logの入れ方

~~~tsx
console.log('[HomeScreen] value', value);
~~~

## どこにログを置くか

- onPressの最初
- dispatch直前
- API呼び出し直前
- useEffect内
- useFocusEffect内
- ABテスト計測直前

## state確認

~~~tsx
console.log('state before save', form);
~~~

## Redux確認

~~~tsx
const user = useSelector((state: RootState) => state.user);
console.log('redux user', user);
~~~

## 発火確認

~~~tsx
useEffect(() => {
  console.log('useEffect fired');
}, [value]);

useFocusEffect(
  useCallback(() => {
    console.log('useFocusEffect fired');
  }, []),
);
~~~

## ABテスト計測確認

計測関数の直前で、送信するpayloadをそのまま出します。

~~~tsx
console.log('track payload', payload);
trackView(payload);
~~~

## 考え方

バグ調査は「発火したか」より先に「発火直前の値は何か」を確認します。


