import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store";
import Root from "./src/index";

export default function App() {
  const [loaded] = useFonts({
    "kdam-thmorpro-regular": require("./assets/fonts/KdamThmorPro-Regular.ttf"),
    "tirotelugu-regular": require("./assets/fonts/TiroTelugu-Regular.ttf"),
    "montserrat-italic-variablefont-wght": require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "montserrat-variablefont-wght": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }
  
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}