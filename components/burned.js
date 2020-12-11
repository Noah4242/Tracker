import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
export default ({ handleCaloriesUpdate, image, burnt }) => {
  const [equantity, setEquantity] = useState(1);

  const handleUpdateQuantity = (value) => {
    setQuantity(equantity + value);
    if (quantity <= 0) setQuantity(1);
  };
  return (
    <View style={{ backgroundColor: "coral" }}>
      <Image></Image>
      <Text style={{ color: "#fff" }}>burnt</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <Button title="-" onPress={() => handleUpdateQuantity(-1)} />
        <Text style={{ color: "#fff" }}>{quantity}</Text>
        <Button title="+" onPress={() => handleUpdateQuantity(1)} /> */}
      </View>
      <Button
        title="dlk"
        onPress={() => handleCaloriesUpdate(calories * quantity)}
      ></Button>
    </View>
  );
};
