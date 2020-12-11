import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./app/screens/main";
import Login from "./app/screens/login";
import { add } from "react-native-reanimated";
const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="add" component={add} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
