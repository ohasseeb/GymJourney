import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

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

      <Button title="Submit"> </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#f0f",
    borderWidth: 5,
    height: 500,
  },
});

export default RestPage;
