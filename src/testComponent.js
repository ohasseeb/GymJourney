import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
const click = () => {
  console.log("Click Function");
};

export default function TestComponent() {
  return (
    <View>
      <Button onPress={this.click} title="This is a Test" />
      {console.log("testing Console.log")}
    </View>
  );
}
