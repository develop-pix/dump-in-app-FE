import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function NavigationBar() {
  type RootStackParam = {
    Home: undefined;
    Location: undefined;
    Category: undefined;
    MyPage: undefined;
  };

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  return (
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        padding: 30,
        width: "100%",
        bottom: 0,
      }}
    >
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={{ color: "white" }}>홈</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Location")}>
        <Text style={{ color: "white" }}>Location</Text>
      </Pressable>
      <Text style={{ color: "white" }}>+</Text>
      <Pressable onPress={() => navigation.navigate("Category")}>
        <Text style={{ color: "white" }}>Category</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("MyPage")}>
        <Text style={{ color: "white" }}>My Page</Text>
      </Pressable>
    </View>
  );
}
