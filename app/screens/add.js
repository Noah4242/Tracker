const { View } = require("react-native");
import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import Food from "../../components/food";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

export default  function add {
  return(
<View>
  <View>
    <Text>add food</Text>
  </View>
  <Food />
  <Food />
  <Food />
</View>
  );
}
