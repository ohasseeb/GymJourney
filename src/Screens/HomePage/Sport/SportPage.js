import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Picker,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

import CustomSubmitButton from "../../../CustomSubmitButton/CustomSubmitButton";

class SportPage extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        selection: "Basketball",
        timeSelection: "0",
      }; // end state
    } // end super
  } // end ctor

  render() {
    const printFunction = () => {
      console.log("Selection:", this.state.selection);
      console.log("Time Selection:", this.state.timeSelection);
    }; // end print function

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
            selectedValue={this.state.selection}
            onValueChange={(itemValue) =>
              this.setState({ selection: itemValue })
            }
          >
            <Picker.Item label="Basketball" value="Basketball" />
            <Picker.Item label="Beach Ultimate" value="Beach Ultimate" />
            <Picker.Item label="Grass Ultimate" value="Grass Ultimate" />
            <Picker.Item label="Soccer" value="Soccer" />
            <Picker.Item label="Outside Biking" value="Outside Biking" />
            <Picker.Item label="Other" value="Other" />
          </Picker>

          <Picker
            selectedValue={this.state.timeSelection}
            onValueChange={(timeValue) =>
              this.setState({ timeSelection: timeValue })
            }
          >
            {pickerValues.map((val) => (
              <Picker.Item key={val.toString()} label={val} value={`${val}`} />
            ))}
          </Picker>
          {/* <CustomSubmitButton styles={styles.customButton} /> */}
        </View>

        <View styles={styles.containerDos}></View>
        <CustomSubmitButton
          styles={styles.customButton}
          onBtnClick={printFunction}
          SportsPage
        />
      </View>
    );
  } // end return
} // end class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },

  text: {
    backgroundColor: "skyblue",
    borderColor: "#000",
    borderWidth: 5,
    justifyContent: "flex-start",
    fontSize: 40,
  }, // End Text Styling
  // customButton: {},
});

export default SportPage;
