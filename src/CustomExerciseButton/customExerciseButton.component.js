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

// https://getcssscan.com/css-buttons-examples Button 59

const styles = StyleSheet.create({
  touchableOpac: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 2,
    borderStyle: "solid",
    color: "#000",
    height: 75,
    justifyContent: "center",
    lineHeight: 24,
    minWidth: 140,
    // padding: 17,
    marginTop: 20,
    width: 300,

    // display: "flex",
  },

  text: {
    // borderColor: "#F3F3F3",
    // border: "dashed",
    fontSize: 30,
    fontWeight: "600",
    color: "black",
    letterSpacing: -0.8,
    lineHeight: 50,
    textAlign: "center",
    borderColor: "black",
  },
});
