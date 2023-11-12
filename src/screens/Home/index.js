/* eslint-disable prettier/prettier */

import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Home = () => {
  const handlePressHome = () => {
    console.log("Hola desde el Home");
  };
  return (
    <SafeAreaView style={Styles.container}>
      <View style={{ ...Styles.gridRow, flexDirection: "row" }}>
        <View
          style={{
            ...Styles.gridColumn,
            justifyContent: "flex-end",
            paddingBottom: "5%",
          }}>
          <TouchableOpacity
            style={{ ...Styles.gridButton, backgroundColor: "red" }}>
            <Text style={{ ...Styles.buttonTitle }}>Home</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...Styles.gridColumn,
            justifyContent: "flex-end",
            paddingBottom: "5%",
          }}>
          <TouchableOpacity
            style={{ ...Styles.gridButton, backgroundColor: "red" }}>
            <Text style={{ ...Styles.buttonTitle }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ ...Styles.gridRow, flexDirection: "row" }}>
        <View
          style={{
            ...Styles.gridColumn,
            justifyContent: "flex-end",
            paddingBottom: "5%",
          }}>
          <TouchableOpacity
            style={{ ...Styles.gridButton, backgroundColor: "red" }}>
            <Text style={{ ...Styles.buttonTitle }}>Home</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...Styles.gridColumn,
            justifyContent: "flex-end",
            paddingBottom: "5%",
          }}>
          <TouchableOpacity
            style={{ ...Styles.gridButton, backgroundColor: "red" }}>
            <Text style={{ ...Styles.buttonTitle }}>Home</Text>
          </TouchableOpacity>
        </View>
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
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#606060",
  },
  buttonTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
    elevation: 3,
  },
});
export default Home;
