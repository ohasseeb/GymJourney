import React from "react";
import { TouchableOpacity } from "react-native";
import { Button, StyleSheet, Text, View } from "react-native";
import { useWindowDimensions } from "react-native";
import CustomButtonCollection from "../../../CustomButtonCollection/CustomButtonCollection";
export default function HomePage({ navigation }) {
  const window = useWindowDimensions();

  var width = window.width;
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Gym Journey</Text>

      <CustomButtonCollection navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "green",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  text: {
    // borderColor: "#F3F3F3",
    // border: "dashed",
    fontSize: 30,
    color: "white",
    alignContent: "flex-start",
    margin: 30,
    paddingBottom: 60,
  },
});
