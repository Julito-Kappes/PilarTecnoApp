/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Map from "../screens/Map";

import { createStackNavigator } from "@react-navigation/stack";

const MapStack = createStackNavigator();

export const MapStackScreen = () => {
  return (
    <MapStack.Navigator screenOptions={{ headerShown: false }}>
      <MapStack.Screen name="Map" component={Map} />
    </MapStack.Navigator>
  );
};
