# React Cheatsheet

React / React Nativeで毎回迷いやすい基本を、短く読み返せる形でまとめます。

## Component

componentはUIを作る関数です。

~~~tsx
type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <Text>{title}</Text>;
}
~~~

## props

propsは親componentから子componentへ渡す値です。

~~~tsx
<Title title="Home" />
~~~

## state

stateは画面内で変化する値です。

~~~tsx
const [count, setCount] = useState(0);
~~~

## useEffect

初回表示や依存値が変わった時に処理します。

~~~tsx
useEffect(() => {
  console.log('loaded');
}, []);
~~~

## useCallback

関数を再利用したい時や、useFocusEffectに渡す時によく使います。

~~~tsx
const handlePress = useCallback(() => {
  console.log('pressed');
}, []);
~~~

## useMemo

計算結果を再利用したい時に使います。

~~~tsx
const doneItems = useMemo(() => {
  return items.filter((item) => item.done);
}, [items]);
~~~

## 条件分岐

~~~tsx
if (loading) {
  return <Text>Loading...</Text>;
}

return <Text>Done</Text>;
~~~

## mapで一覧表示

~~~tsx
{items.map((item) => (
  <Text key={item.id}>{item.title}</Text>
))}
~~~

## よく読む順番

1. component名を見る
2. propsを見る
3. useStateを見る
4. useEffect / useFocusEffectを見る
5. onPressなどのイベントを見る
6. API / Redux / navigationへ進む

