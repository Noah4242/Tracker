import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

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
    <SafeAreaView style={{ backgroundColor: "teal" }}>
      <View
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          height: "15%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>calories burned</Text>
        <Text> daily budget</Text>
        <Text>Calories consumed</Text>
      </View>
      <View
        style={{
          backgroundColor: "teal",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Svg
          width="100%"
          height="200"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle cx="100" cy="100" r="100" fill="#3B38C6" />
          <Path
            d="M100 0C82.07 -2.13813e-07 64.4699 4.82073 49.0425 13.9574C33.615 23.0941 20.9279 36.2106 12.3096 51.9334C3.69129 67.6563 -0.541192 85.4071 0.055365 103.327C0.651922 121.247 6.05557 138.677 15.7005 153.792C25.3454 168.907 38.8767 181.151 54.8776 189.241C70.8785 197.332 88.7604 200.971 106.651 199.779C124.541 198.586 141.781 192.606 156.567 182.463C171.353 172.321 183.139 158.389 190.693 142.128L100 100V0Z"
            fill="#F0A202"
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
