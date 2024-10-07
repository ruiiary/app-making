import React, { useState } from "react";
import { View, Button, Text, ImageBackground } from "react-native";
import { Audio } from "expo-av";

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

const key_st = {
  flex: 1,
  margin: 5,
  backgroundColor: "rgba(100, 100, 10, 0.2)",
};

export default function Piano() {
  const [k1, setk1] = useState(0);
  const [k2, setk2] = useState(0);
  const [k3, setk3] = useState(0);
  const [k4, setk4] = useState(0);
  const [k5, setk5] = useState(0);
  const [k6, setk6] = useState(0);
  const [k7, setk7] = useState(0);
  const [k8, setk8] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        resizeMode="stretch"
        source={require("../assets/keyboard.png")}
      >
        <View
          style={[key_st, { opacity: k1 }]} 
          onTouchStart={() => {
            play00();
            setk1(1);
          }}
          onTouchEnd={() => setk1(0)}
        />
        <View
          style={[key_st, { opacity: k2 }]} 
          onTouchStart={() => {
            play02();
            setk2(1);
          }}
          onTouchEnd={() => setk2(0)}
        />
        <View
          style={[key_st, { opacity: k3 }]} 
          onTouchStart={() => {
            play04();
            setk3(1);
          }}
          onTouchEnd={() => setk3(0)}
        />
        <View
          style={[key_st, { opacity: k4 }]} 
          onTouchStart={() => {
            play05();
            setk4(1);
          }}
          onTouchEnd={() => setk4(0)}
        />
        <View
          style={[key_st, { opacity: k5 }]} 
          onTouchStart={() => {
            play07();
            setk5(1);
          }}
          onTouchEnd={() => setk5(0)}
        />
        <View
          style={[key_st, { opacity: k6 }]} 
          onTouchStart={() => {
            play09();
            setk6(1);
          }}
          onTouchEnd={() => setk6(0)}
        />
        <View
          style={[key_st, { opacity: k7 }]} 
          onTouchStart={() => {
            play11();
            setk7(1);
          }}
          onTouchEnd={() => setk7(0)}
        />
        <View
          style={[key_st, { opacity: k8 }]} 
          onTouchStart={() => {
            play12();
            setk8(1);
          }}
          onTouchEnd={() => setk8(0)}
        />
        {/*
        <View style={key_st} onTouchStart={play00}></View>
        <View style={key_st} onTouchStart={play02}></View>
        <View style={key_st} onTouchStart={play04}></View>
        <View style={key_st} onTouchStart={play05}></View>
        <View style={key_st} onTouchStart={play07}></View>
        <View style={key_st} onTouchStart={play09}></View>
        <View style={key_st} onTouchStart={play11}></View>
        <View style={key_st} onTouchStart={play12}></View>
        */}
      </ImageBackground>
    </View>
  );
}
