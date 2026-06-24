import React from "react";
import { Provider } from "react-redux";
import { CounterExampleScreen } from "./CounterExampleScreen";
import { store } from "./store";

export default function AppProviderExample() {
  return (
    <Provider store={store}>
      <CounterExampleScreen />
    </Provider>
  );
}
