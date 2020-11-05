import React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

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
          height: "15%",
          justifyContent: "space-between",
        }}
      >
        <Text>calories burned</Text>
        <Text> daily budget</Text>
        <Text>Calories consumed</Text>
      </View>
      <View>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="150"
            cy="30"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Circle
            cx="50"
            cy="50"
            r="42"
            stroke="black"
            strokeWidth="2.5"
            fill="coral"
          />
        </Svg>
      </View>
      <View>
        <Button title="BUTTON"></Button>
        <Button title="BUTTON"></Button>
        <Button title="BUTTON"></Button>
      </View>
    </SafeAreaView>
  );
}
