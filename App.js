/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from "react";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/screens/routes";

const App = props => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
