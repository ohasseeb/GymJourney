import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

const LegsPage = ({ navigation }) => {
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
};

const styles = StyleSheet.create({
  outerColumn: {
    flex: 1,
    flexDirection: "row",
  },

  innerColumn: {
    flex: 1,
    // borderColor: "black dashed",
    height: 800,
  },

  text: {
    borderColor: "#FF3D00",
    borderWidth: 5,
    flex: 1,
    height: 100,
  },
  button: {
    height: 50,
    backgroundColor: "#FF9800",
    borderWidth: 5,
  },
});

export default LegsPage;
