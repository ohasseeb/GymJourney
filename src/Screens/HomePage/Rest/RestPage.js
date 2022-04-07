import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

import CustomSubmitButton from "../../../CustomSubmitButton/CustomSubmitButton";

const RestPage = () => {
  return (
    <View>
      <Text> Welcome to the Rest Page</Text>
      <Text>What did you do today?</Text>
      <TextInput
        multiline
        numberOfLines={10}
        placeholder="Chill, Anime, Code, Read?"
        style={styles.textInput}
      />

      <CustomSubmitButton RestPage></CustomSubmitButton>
      {/* <Button title="Submit"> </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#000",
    borderWidth: 5,
    height: 500,
  },
});

export default RestPage;
