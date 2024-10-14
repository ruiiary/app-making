import { Text, View, Image, Button, TextInput } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

var text_st = {
  fontSize: 30,
  backgroundColor: "lightgray",
  padding: 10,
  margin: 10,
};
var input_st = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };

export default function Index() {
  return (
    <View>
        <Text style={text_st}>Home Screen</Text>
        <Button
          title="About"
          onPress={function () {
            router.navigate("about");
          }}
        />
        <View style={{ height: 10 }} />
        <Button
          title="Hello"
          onPress={function () {
            router.navigate("hello");
          }}
        />
        <View style={{ height: 10 }} />
        <Button
          title="구구단"
          onPress={function () {
            router.navigate("multiplication");
          }}
        />
        <View style={{ height: 10 }} />
         <Button
          title="piano"
          onPress={function () {
            router.navigate("piano");
          }}
        />
        <View style={{ height: 10 }} />
         <Button
          title="box in box"
          onPress={function () {
            router.navigate("boxinbox");
          }}
        />
    </View>
  );
}
