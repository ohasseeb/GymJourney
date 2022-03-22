import React from "react";

import { TouchableOpacity, Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const CustomButton = ({ exerciseName, navigation }) => {
  const navigateTo = () => {
    navigation.navigate("Arms");
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.touchableOpac}
        title={exerciseName}
        onPress={() => navigation.navigate(`${exerciseName}`)}
      >
        <Text style={styles.text}> {exerciseName} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  touchableOpac: {
    // border: " 12px solid",
    borderColor: "beige",
    borderWidth: 12,
    width: 200,
    margin: 30,
    backgroundColor: "black",
    // alignContent: "center",
    alignItems: "center",
  },

  text: {
    // borderColor: "#F3F3F3",
    // border: "dashed",
    fontSize: 30,
    color: "white",
  },
});
