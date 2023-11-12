/* eslint-disable prettier/prettier */

import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Mocha = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={{ ...Styles.gridRow, flexDirection: "row" }}>
        <Text>LogIn</Text>
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  gridcontainer: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: "red",
  },
  gridColumn: {
    flex: 1,
    alignItems: "center",
  },
  gridRow: {
    flex: 1,
  },
  gridButton: {
    backgroundColor: "blue",
    height: HEIGHT * 0.4,
    width: WIDTH * 0.4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 3,
  },
});
export default Mocha;
