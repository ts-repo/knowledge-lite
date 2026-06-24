import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { addByAmount, decrement, increment, reset } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export function CounterExampleScreen() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Counter</Text>
      <Text style={styles.count}>{count}</Text>

      <View style={styles.buttons}>
        <Button title="+1" onPress={() => dispatch(increment())} />
        <Button title="-1" onPress={() => dispatch(decrement())} />
        <Button title="+5" onPress={() => dispatch(addByAmount(5))} />
        <Button title="Reset" onPress={() => dispatch(reset())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  count: {
    fontSize: 48,
    fontWeight: "800",
  },
  buttons: {
    gap: 8,
  },
});
