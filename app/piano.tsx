import React from "react";
import { View, Button, Text, ImageBackground } from "react-native";
import { Audio } from "expo-av";

async function requestAudioPermission() {
  const permission = await Audio.requestPermissionsAsync();
  if (permission.status !== 'granted') {
    alert('Audio permission is required to play sounds');
  }
}

async function play00() {
  console.log("Loading Sound");
  var s = await Audio.Sound.createAsync(require("../assets/note00.m4a"));

  console.log("Playing Sound");
  s.sound.playAsync();
}

async function play02() {
  var s = await Audio.Sound.createAsync(require("../assets/note02.m4a"));
  s.sound.playAsync();
  console.log("Playing Sound");
}

async function play04() {
  var s = await Audio.Sound.createAsync(require("../assets/note04.m4a"));
  s.sound.playAsync();
  console.log("Playing Sound");
}

async function play05() {
  var s = await Audio.Sound.createAsync(require("../assets/note05.m4a"));
  s.sound.playAsync();
  console.log("Playing Sound");
}

async function play07() {
  var s = await Audio.Sound.createAsync(require("../assets/note07.m4a"));
  s.sound.playAsync();
  console.log("Playing Sound");
}

async function play09() {
  var s = await Audio.Sound.createAsync(require("../assets/note09.m4a"));
  s.sound.playAsync();
  console.log("Playing Sound");
}

async function play11() {
  var s = await Audio.Sound.createAsync(require("../assets/note11.m4a"));
  s.sound.playAsync();
  console.log("Playing Sound");
}

async function play12() {
  var s = await Audio.Sound.createAsync(require("../assets/note12.m4a"));
  s.sound.playAsync();
  console.log("Playing Sound");
}

const key_st = { flex: 1, margin: 5, backgroundColor: "rgba(100, 100, 10, 0.2)" };

export default function Piano() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        resizeMode="stretch"
        source={require("../assets/keyboard.png")}
      >
        <View style={key_st} onTouchStart={play00}></View>
        <View style={key_st} onTouchStart={play02}></View>
        <View style={key_st} onTouchStart={play04}></View>
        <View style={key_st} onTouchStart={play05}></View>
        <View style={key_st} onTouchStart={play07}></View>
        <View style={key_st} onTouchStart={play09}></View>
        <View style={key_st} onTouchStart={play11}></View>
        <View style={key_st} onTouchStart={play12}></View>
      </ImageBackground>
    </View>
  );
}

