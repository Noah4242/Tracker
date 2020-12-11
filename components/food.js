import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
export default ({ handleCaloriesUpdate, title, image, calories }) => {
  const [quantity, setQuantity] = useState(1);

  const handleUpdateQuantity = (value) => {
    setQuantity(quantity + value);
    if (quantity <= 0) setQuantity(1);
  };
  return (
    <View style={{ backgroundColor: "orange" }}>
      <Image></Image>
      <Text style={{ color: "#fff" }}>calories</Text>
      <Text></Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <Button title="-" onPress={() => handleUpdateQuantity(-1)} />
        <Text style={{ color: "#fff" }}>{quantity}</Text>
        <Button title="+" onPress={() => handleUpdateQuantity(1)} /> */}
      </View>
      <Button
        title={title}
        onPress={() => handleCaloriesUpdate(calories * quantity)}
      ></Button>
    </View>
  );
};
