import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { NavigationContainer } from '@react-navigation/native';

import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style={{ backgroundColor: "#171930" }}>
      <View
        style={{
          flexDirection: "row",
          height: "5%",
          width: "100%",
          alignContent: "space-between",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#3B38C6",
            width: "33.34%",
            alignItems: "center",
          }}
        >
          <Text>budget</Text>
        </View>
        <View
          style={{
            backgroundColor: "#F0A202",
            width: "33.34%",
            alignItems: "center",
          }}
        >
          <Text>consumed</Text>
        </View>
        <View
          style={{
            backgroundColor: "#3B38C6",
            width: "33.34%",
            alignItems: "center",
          }}
        >
          <Text>burnt</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#171930",
          justifyContent: "center",
          alignItems: "center",
          flex: "row",
        }}
      >
        <Svg
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M110 55C110 67.1676 105.965 78.9917 98.5272 88.6212C91.0892 98.2507 80.668 105.142 68.8951 108.216C57.1222 111.29 44.6623 110.373 33.4661 105.609C22.2699 100.845 12.9694 92.5031 7.02087 81.8887C1.07231 71.2743 -1.18856 58.987 0.592238 46.9504C2.37303 34.9139 8.09495 23.8076 16.8622 15.3704C25.6294 6.9332 36.9469 1.64143 49.043 0.323555C61.139 -0.994316 73.3306 1.73612 83.709 8.08738L55 55L110 55Z"
            fill="#20B1A9"
          />
        </Svg>
        <Svg
          width="100%"
          height="200"
          viewBox="0 0 250 250"
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
      <View style={{ alignItems: "center" }}>
        <Svg
          width="414"
          height="486"
          viewBox="0 0 414 486"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><TouchableOpacity>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M350.449 486H0V0C195.509 0 354 190.503 354 425.5C354 446.039 352.789 466.238 350.449 486Z"
            fill="#3B38C6"
          /></TouchableOpacity><TouchableOpacity>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M414 0V486H63.551C61.2107 466.238 60 446.039 60 425.5C60 190.503 218.491 0 414 0Z"
            fill="#3B38C6"
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M350.449 486C352.789 466.238 354 446.039 354 425.5C354 283.399 296.047 157.567 207 80.2887C117.953 157.567 60 283.399 60 425.5C60 446.039 61.2107 466.238 63.551 486H350.449Z"
            fill="#F0A202"
          /></TouchableOpacity>
        </Svg>
      </View>
    </SafeAreaView>
    </NavigationContainer>
  );
}
