# Styling Cheatsheet

## flex

~~~tsx
container: { flex: 1 }
~~~

## flexDirection

~~~tsx
row: { flexDirection: 'row' }
column: { flexDirection: 'column' }
~~~

## justifyContent / alignItems

~~~tsx
center: { justifyContent: 'center', alignItems: 'center' }
~~~

## margin / padding / gap

~~~tsx
card: { padding: 16, marginBottom: 12, gap: 8 }
~~~

## position absolute / zIndex

~~~tsx
fab: { position: 'absolute', right: 16, bottom: 24, zIndex: 10 }
~~~

## SafeArea / ScrollView

画面端やキーボード被りを避ける時に意識します。

## よく使うStyleSheetテンプレ

~~~tsx
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff', padding: 16 },
  card: { borderRadius: 12, padding: 16, backgroundColor: '#fff' },
  button: { height: 48, alignItems: 'center', justifyContent: 'center' },
});
~~~


