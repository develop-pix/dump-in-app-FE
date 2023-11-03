import React from "react";
import { View, Text } from "react-native";
import NavigationBar from "../components/reuse/navigation-bar/NavigationBar";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home 페이지</Text>
      <NavigationBar />
    </View>
  );
}
