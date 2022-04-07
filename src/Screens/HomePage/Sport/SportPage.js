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
        otherInput: "",
      }; // end state
    } // end super
  } // end ctor

  render() {
    const OtherComponent = () => {
      if (this.state.selection == "Other") {
        return (
          <TextInput
            style={styles.textInput}
            onChangeText={(inputText) =>
              this.setState({ otherInput: inputText })
            }
            value={this.state.otherInput}
            // value={this.state.otherInput}
            placeholder="Sport"
            autoCorrect={false}
            autoFocus={true}
          />
        );
      } else {
        return null;
      } // end else
    };
    const printFunction = () => {
      // console.log("Selection:", this.state.selection);
      console.log("Time Selection:", this.state.timeSelection);
      if (this.state.selection == "Other") {
        console.log("Selection is Other");
        console.log("OtherInput:", this.state.otherInput);
      } else {
        console.log("Selection:", this.state.selection);
      }
      // } // end if Statement
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

          <OtherComponent />

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

        {/* <Modal transparent={true} animationType="slide" visible={true}></Modal> */}

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

  textInput: {
    backgroundColor: "skyblue",
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 30,

    width: 400,
    alignSelf: "center",
  },

  text: {
    backgroundColor: "skyblue",
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "flex-start",
    fontSize: 30,
  }, // End Text Styling
  // customButton: {},
});

export default SportPage;

// Alert.alert(
//       "Alert Title",
//       "My Alert Msg",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         { text: "OK", onPress: () => console.log("OK Pressed") }
//       ],
//       { cancelable: false }
//     );
