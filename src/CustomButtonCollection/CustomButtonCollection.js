import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import CustomButton from "../CustomExerciseButton/customExerciseButton.component";

const CustomButtonCollection = ({ navigation }) => {
  return (
    <View>
      <CustomButton exerciseName={"Arms"} navigation={navigation}>
        {" "}
      </CustomButton>
      <CustomButton exerciseName={"Legs"} navigation={navigation}>
        {" "}
      </CustomButton>
      <CustomButton exerciseName={"Cardio"} navigation={navigation}>
        {" "}
      </CustomButton>
      <CustomButton exerciseName={"Sport"} navigation={navigation}>
        {" "}
      </CustomButton>
      <CustomButton exerciseName={"Rest"} navigation={navigation}>
        {" "}
      </CustomButton>
    </View>
  );
};

export default CustomButtonCollection;
