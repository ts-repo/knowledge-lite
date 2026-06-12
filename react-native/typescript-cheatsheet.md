# TypeScript Cheatsheet

## 基本文法

~~~ts
const name: string = 'app';
let count: number = 0;
const enabled: boolean = true;
const items: string[] = ['a', 'b'];
~~~

## object / interface / type

~~~ts
interface User {
  id: string;
  name?: string;
}

type Status = 'draft' | 'published';
~~~

## async / await

~~~ts
async function load() {
  const value = await fetchValue();
  return value;
}
~~~

## map / filter / find

~~~ts
items.map((item) => item.title);
items.filter((item) => item.done);
items.find((item) => item.id === id);
~~~

## 関数

~~~ts
function add(a: number, b: number): number {
  return a + b;
}

const add2 = (a: number, b: number) => a + b;
~~~

## React Nativeでよく見る括弧

~~~tsx
useEffect(() => {
  // 処理
}, []);

useCallback(() => {
  // 処理
}, [id]);
~~~

## 初心者テンプレ

空で書けなくてOKです。既存コードをコピーして、型名と変数名を変えるところから始めます。


