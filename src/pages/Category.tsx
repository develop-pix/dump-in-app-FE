import React from "react";
import { View, Text } from "react-native";
import NavigationBar from "../components/reuse/navigation-bar/NavigationBar";

export default function Category() {
  return (
    <View style={{ flex: 1 }}>
      <Text>카테고리 페이지</Text>
      <NavigationBar />
    </View>
  );
}
