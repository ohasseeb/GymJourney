import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Picker,
  TextInput,
  Button,
} from "react-native";

const SportPage = ({ navigation }) => {
  const pickerValues = [];
  for (let i = 0; i <= 60; i = i + 5) {
    pickerValues.push(i.toString());
  }
  return (
    <View>
      <Text> Welcome to the Rest Page</Text>
      <View>
        <Text> Last Time</Text>
        <Text> Exercise</Text>
        <Text> Time</Text>
      </View>

      {/* Bottom Column */}
      <View>
        <Picker>
          <Picker.Item label="Basketball" />
          <Picker.Item label="Beach Ultimate" />
          <Picker.Item label="Grass Ultimate" />
          <Picker.Item label="Soccer" />
          <Picker.Item label="Outside Biking" />
        </Picker>

        <Picker>
          {pickerValues.map((val) => (
            <Picker.Item key={val.toString()} label={val} />
          ))}
        </Picker>
      </View>

      <Button title="Submit"></Button>
    </View>
  );
}; // RestPage

export default SportPage;
