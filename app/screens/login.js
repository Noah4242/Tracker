import React from "react";
import { Text, View, Button } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={{ bagroundcolor: "red" }}>
      <Text>slkjdlaksjdalsdkj</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
    </View>
  );
}
