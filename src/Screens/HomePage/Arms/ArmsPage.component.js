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
    <View style={styles.container}>
      <View>
        <ScrollView
          style={styles.scrollView}
          alwaysBounceVertical={true}
          alwaysBounceHorizontal={false}
        >
          <View style={styles.outerColumn}>
            <View style={styles.innerColumn}>
              <Text style={styles.header}> Previous Workout </Text>
              <Text style={styles.text}> Test 1</Text>
              <Text style={styles.text}> Test 1</Text>
              <Text style={styles.text}> Test 1</Text>
              <Text style={styles.text}> Test 1</Text>
              <Text style={styles.text}> Test 1</Text>
              <Text style={styles.text}> Test 1</Text>
            </View>
            <View style={styles.innerColumn}>
              <Text style={styles.header}> Current Workout </Text>
              <TextInput
                multiline
                style={styles.text}
                placeholder="Exercise 1"
              />
              <TextInput
                multiline
                style={styles.text}
                placeholder="Exercise 2"
              />
              <TextInput
                multiline
                style={styles.text}
                placeholder="Exercise 3"
              />
              <TextInput
                multiline
                style={styles.text}
                placeholder="Exercise 4"
              />
              <TextInput
                multiline
                style={styles.text}
                placeholder="Exercise 5"
              />
              <TextInput
                multiline
                style={styles.text}
                placeholder="Exercise 6"
              />
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
    flex: 1,
    backgroundColor: "beige",
    // width: 1000,
    // backgroundColor: "rgb(255,255,255)",
  },

  header: {
    fontWeight: "600",
    fontSize: 20,
    paddingBottom: 10,
  },

  outerColumn: {
    flex: 1,
    flexDirection: "row",
  },

  textInput: {
    borderColor: "#f0f",
    borderWidth: 5,
    flex: 1,
    height: 100,
  },

  innerColumn: {
    flex: 1,
    // borderColor: "black dashed",
    height: 800,
  },
  text: {
    borderColor: "#fff",
    borderWidth: 5,
    flex: 1,
    height: 100,
  },
  button: {
    // width: "100%",
    height: 50,
    backgroundColor: "#FF9800",
    borderWidth: 5,
    textAlign: "center",
    fontSize: 20,
    justifyContent: "center",

    // marginTop: 600,
  },
});
