import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TestComponent from "./src/testComponent";
import HomePage from "./src/Screens/HomePage/HomePage/HomePage.component";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArmsPage from "./src/Screens/HomePage/Arms/ArmsPage.component";
import CustomButton from "./src/CustomExerciseButton/customExerciseButton.component";
import CardioPage from "./src/Screens/HomePage/Cardio/CardioPage";
import LegsPage from "./src/Screens/HomePage/Legs/LegsPage";
import RestPage from "./src/Screens/HomePage/Rest/RestPage";
import SportPage from "./src/Screens/HomePage/Sport/SportPage";
const Stack = createNativeStackNavigator();

function App() {
  const window = useWindowDimensions();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Arms">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Arms" component={ArmsPage} />
        <Stack.Screen name="Legs" component={LegsPage} />
        <Stack.Screen name="Cardio" component={CardioPage} />
        <Stack.Screen name="Rest" component={RestPage} />
        <Stack.Screen name="Sport" component={SportPage} />

        {/* <Stack.Screen name="Arms" component={CustomButton} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <Navigator /> */}
    //   <HomePage></HomePage>
    // </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
