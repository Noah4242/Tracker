import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
export default function App() {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          height: "30%",
          justifyContent: "space-between",
        }}
      >
        <Text>calories burned</Text>
        <Text> daily budget</Text>
        <Text>Calories consumed</Text>
      </View>
      <View></View>
      <View>
        <Button title="BUTTON"></Button>
        <Button title="BUTTON"></Button>
        <Button title="BUTTON"></Button>
      </View>
    </SafeAreaView>
  );
}
