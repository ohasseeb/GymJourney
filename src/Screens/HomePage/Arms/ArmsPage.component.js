import React from "react";
import { Button } from "react-native";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

export default function ArmsPage({ navigation }) {
  return (
    <View>
      <Text> Welcome to the Arms Page </Text>

      <View>
        <ScrollView
          style={styles.scrollView}
          alwaysBounceVertical={true}
          alwaysBounceHorizontal={false}
        >
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
          <TouchableOpacity title="Send">
            <View>
              <Text style={styles.button}>Send</Text>
            </View>
          </TouchableOpacity>

          <View>
            <Text>{`\n`}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 1000,
    backgroundColor: "rgb(255,255,255)",
  },

  scrollView: {
    marginHorizontal: 20,
  },

  outerColumn: {
    flex: 1,
    flexDirection: "row",
  },

  innerColumn: {
    flex: 1,
    // borderColor: "black dashed",
    height: 1000,
  },
  text: {
    borderColor: "#f0f",
    borderWidth: 5,
    flex: 1,
    height: 100,
  },
  button: {
    // width: "100%",
    height: 50,
    backgroundColor: "#FF9800",
    borderWidth: 5,

    // marginTop: 600,
  },
});
