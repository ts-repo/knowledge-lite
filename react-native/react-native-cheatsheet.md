# React Native Cheatsheet

## 基本用語

- component: 画面の一部を作る部品
- screen: 1つの画面として扱われるcomponent
- props: 親から子へ渡す値
- state: component内で変化する値
- onPress: ボタンなどを押した時の処理

## useState

~~~tsx
const [count, setCount] = useState(0);
setCount(count + 1);
~~~

## useEffect

初回表示時や値が変わった時に処理します。

~~~tsx
useEffect(() => {
  console.log('mounted');
}, []);
~~~

## useFocusEffect

画面に戻ってきた時の処理に使います。

~~~tsx
useFocusEffect(
  useCallback(() => {
    console.log('focused');
  }, []),
);
~~~

## Redux

~~~tsx
const value = useSelector((state: RootState) => state.user.value);
const dispatch = useDispatch();
dispatch(updateUser(nextUser));
~~~

## TextInput

~~~tsx
<TextInput value={text} onChangeText={setText} placeholder="入力" />
~~~

## FlatList

~~~tsx
<FlatList data={items} keyExtractor={(item) => item.id} renderItem={({ item }) => <Text>{item.title}</Text>} />
~~~

## AsyncStorage

~~~tsx
await AsyncStorage.setItem('key', JSON.stringify(value));
const raw = await AsyncStorage.getItem('key');
~~~

## React Nativeコードの読み方

1. 画面ファイルを探す
2. propsを確認する
3. stateを確認する
4. useEffect / useFocusEffectを確認する
5. onPressから処理を追う
6. ReduxやAPI呼び出しを見る
7. console.logで直前の値を確認する


