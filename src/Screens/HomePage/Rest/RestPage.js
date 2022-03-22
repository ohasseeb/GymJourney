import React from "react";
import { TouchableOpacity, Text, View, TextInput, Button } from "react-native";

const RestPage = () => {
  return (
    <View>
      <Text> Welcome to the Rest Page</Text>
      <Text>What did you do today?</Text>
      <TextInput placeholder="Chill, Anime, Code, Read?" />
    </View>
  );
};

export default RestPage;
