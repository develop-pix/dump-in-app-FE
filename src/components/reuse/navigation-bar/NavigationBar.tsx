import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        padding: 30,
        width: "100%",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ color: "white" }}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Location")}>
        <Text style={{ color: "white" }}>Location</Text>
      </TouchableOpacity>
      <Text style={{ color: "white" }}>+</Text> {/* 카메라 */}
      <TouchableOpacity onPress={() => navigation.navigate("Category")}>
        <Text style={{ color: "white" }}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MyPage")}>
        <Text style={{ color: "white" }}>My Page</Text>
      </TouchableOpacity>
    </View>
  );
}
