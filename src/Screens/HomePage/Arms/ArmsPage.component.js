import React from "react";
import { Button } from "react-native";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function ArmsPage({ navigation }) {
  return (
    <View>
      <Text> Welcome to the Arms Page </Text>
      <View style={styles.outerColumn}>
        <View style={styles.innerColumn}>
          <Text> Left Column </Text>
          <Text style={styles.text}> Test 1</Text>
          <Text style={styles.text}> Test 1</Text>
          <Text style={styles.text}> Test 1</Text>
          <Text style={styles.text}> Test 1</Text>
          <Text style={styles.text}> Test 1</Text>
          <Text style={styles.text}> Test 1</Text>
        </View>
        <View style={styles.innerColumn}>
          <Text> Right Column </Text>
          <TextInput style={styles.text} placeholder="Exercise 1" />
          <TextInput style={styles.text} placeholder="Exercise 2" />
          <TextInput style={styles.text} placeholder="Exercise 3" />
          <TextInput style={styles.text} placeholder="Exercise 4" />
          <TextInput style={styles.text} placeholder="Exercise 5" />
          <TextInput style={styles.text} placeholder="Exercise 6" />
        </View>
      </View>
      <Button title="Send"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  outerColumn: {
    flex: 1,
    flexDirection: "row",
  },

  innerColumn: {
    flex: 1,
    border: "black dashed",
    height: 800,
  },

  text: {
    border: "red solid",
    flex: 1,
    // height: 100,
  },
});
