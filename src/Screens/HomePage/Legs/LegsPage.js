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
    <View style={styles.container}>
      <View>
        <ScrollView
          style={styles.scrollView}
          alwaysBounceVertical={true}
          alwaysBounceHorizontal={false}
        >
          <View style={styles.outerColumn}>
            <View style={styles.innerColumn}>
              <Text style={styles.header}> Left Column </Text>
              <Text style={styles.text}> Test 1</Text>
              <Text style={styles.text}> Test 2</Text>
              <Text style={styles.text}> Test 3</Text>
              <Text style={styles.text}> Test 4</Text>
              <Text style={styles.text}> Test 5</Text>
              <Text style={styles.text}> Test 6</Text>
            </View>
            <View style={styles.innerColumn}>
              <Text style={styles.header}> Right Column </Text>
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
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "600",
    fontSize: 20,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "beige",
  },

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
    borderColor: "#000",
    borderWidth: 5,
    flex: 1,
    // height: 100,
    // justifyContent: "flex-start",
    // alignContent: "flex-start",
  },
  button: {
    height: 50,
    backgroundColor: "#FF9800",
    borderWidth: 5,
    textAlign: "center",
  },
});

export default LegsPage;
