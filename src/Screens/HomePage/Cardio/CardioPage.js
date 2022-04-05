import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  Picker,
} from "react-native";

import CustomSubmitButton from "../../../CustomSubmitButton/CustomSubmitButton";

import { StyleSheet } from "react-native";

class CardioPage extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        selectedCardio: "TreadMill",
        timeSelection: "0",
      }; // end state
    } // end super
  } // end constructor

  render() {
    const printFunction = () => {
      console.log("Selection: ", this.state.selectedCardio);
      console.log("Time Selection: ", this.state.timeSelection);
    };
    const pickerValues = [];
    for (let i = 0; i <= 60; i = i + 5) {
      pickerValues.push(i.toString());
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}> Last Time:</Text>
          <Text style={styles.text}> Exercise:</Text>
          <Text style={styles.text}> Time: </Text>
        </View>

        {/* Bottom Column */}
        <View>
          <Picker
            selectedValue={this.state.selectedCardio}
            onValueChange={(ItemValue) =>
              this.setState({ selectedCardio: ItemValue })
            }
          >
            <Picker.Item label="TreadMill" value="TreadMill" />
            <Picker.Item label="Indoor Biking" value="Indoor Biking" />
            <Picker.Item label="Outdoor Biking" value="Outdoor Biking" />
            <Picker.Item label="Basketball" value="Basketball" />
            <Picker.Item label="Outside Run" value="Outside Run" />
            <Picker.Item label="Outside Biking" value="Outside Biking" />
          </Picker>

          <Picker
            selectedValue={this.state.timeSelection}
            onValueChange={(timeValue) =>
              this.setState({ timeSelection: timeValue })
            }
          >
            {pickerValues.map((val) => (
              <Picker.Item key={val} label={val} value={`${val}`} />
            ))}
          </Picker>
        </View>

        <CustomSubmitButton
          onBtnClick={printFunction}
          CardioPage
        ></CustomSubmitButton>
        {/* <Button onPress={printFunction} title="Submit"></Button> */}
      </View>
    );
  }
} // end class

export default CardioPage;

const styles = StyleSheet.create({
  text: {
    backgroundColor: "green",
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "flex-start",
    fontSize: 30,
  }, // End Text Styling

  container: {
    flex: 1,
    backgroundColor: "beige",
  },
});
