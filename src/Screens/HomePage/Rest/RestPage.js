import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

import CustomSubmitButton from "../../../CustomSubmitButton/CustomSubmitButton";

class RestPage extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        journalEntry: "",
      };
    }
  } // end ctor
  render() {
    const printFunction = () => {
      console.log("Journal Entry for the Day:", this.state.journalEntry);
    };

    return (
      <View>
        <Text> Welcome to the Rest Page</Text>
        <Text>What did you do today?</Text>
        <TextInput
          multiline
          numberOfLines={10}
          placeholder="Chill, Anime, Code, Read?"
          style={styles.textInput}
          onChangeText={(textInput) =>
            this.setState({ journalEntry: textInput })
          }
          value={this.state.journalEntry}
        />

        <CustomSubmitButton
          RestPage
          onBtnClick={printFunction}
        ></CustomSubmitButton>
        {/* <Button title="Submit"> </Button> */}
      </View>
    );
  }
} // end Class

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#000",
    borderWidth: 5,
    height: 500,
  },
});

export default RestPage;
