import React from "react";
import { Text, View, TouchableOpacity, Button, StyleSheet } from "react-native";

const CustomSubmitButton = ({ paddingVal, onBtnClick, ...otherProps }) => {
  var paddingNum = paddingVal ? paddingVal : 0;

  let styleVar = styles.touchableOpac;
  //   console.log(otherProps["sportsPage"]);

  if (otherProps["SportsPage"] || otherProps["CardioPage"]) {
    styleVar = styles.widget;
  }

  return (
    <View styles={styles.container}>
      <TouchableOpacity
        style={styleVar}
        // style={styles.tag}
        title="Submit"
        // onClick={() => onBtnClick}
        onPress={onBtnClick}
      >
        <Text style={styles.text}>Submit </Text>
      </TouchableOpacity>
    </View>
  );
}; // end const

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    // alignItems: "center",
  },
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
  widget: {
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

    marginLeft: 60,
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

export default CustomSubmitButton;
