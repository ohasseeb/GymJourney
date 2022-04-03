import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  Picker,
} from "react-native";

const CardioPage = () => {
  const pickerValues = [];
  for (let i = 0; i <= 60; i = i + 5) {
    pickerValues.push(i.toString());
  }
  return (
    <View>
      <Text> Welcome to the Cardio Page</Text>
      <View>
        <Text> Last Time</Text>
        <Text> Exercise</Text>
        <Text> Time</Text>
      </View>

      {/* Bottom Column */}
      <View>
        <Picker>
          <Picker.Item label="TreadMill" />
          <Picker.Item label="Indoor Biking" />
          <Picker.Item label="Basketball" />
          <Picker.Item label="Outside Run" />
          <Picker.Item label="Outside Biking" />
        </Picker>

        <Picker>
          {pickerValues.map((val) => (
            <Picker.Item key={val} label={val} />
          ))}
        </Picker>
      </View>

      <Button title="Submit"></Button>
    </View>
  );
}; // CardioPage

export default CardioPage;
