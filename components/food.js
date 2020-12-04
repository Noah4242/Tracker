import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
export default ({ handleCaloriesUpdate, image, calories }) => {
  const [quantity, setQuantity] = useState(1);

  const handleUpdateQuantity = (value) => {
    setQuantity(quantity + value);
    if (quantity <= 0) setQuantity(1);
  };
  return (
    <View style={{ backgroundColor: "#f00" }}>
      <Image></Image>
      <Text style={{ color: "#fff" }}>calories</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button title="-" onPress={() => handleUpdateQuantity(-1)} />
        <Text style={{ color: "#fff" }}>{quantity}</Text>
        <Button title="+" onPress={() => handleUpdateQuantity(1)} />
      </View>
      <Button
        title="Add"
        onPress={() => handleCaloriesUpdate(calories * quantity)}
      ></Button>
    </View>
  );
};
