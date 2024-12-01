import { Text, View, Image, Button, TextInput } from "react-native";
import { useState } from "react";

export default function about() {
  const [greet, setGreet] = useState("Hi");

  var hello = "Hello";

  function action() {
    hello = "Nice to meet you!";
  }

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Ewha</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text>This is about the app.</Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("./cat-icon.png")}
        />
      </View>
      <Text>{hello}</Text>
      <Button title="Press Me" onPress={action}></Button>

      {/* flex layout */}
      {/* case1: 남은 공간의 1:2:3 */}
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "yellow" }} />
        <View style={{ flex: 3, backgroundColor: "green" }} />
        <Text style={{ fontSize: 50 }}>ABC</Text>
        <Text style={{ fontSize: 80 }}>ABC</Text>
      </View>

      {/* case2: without flex:1 on top <View> */}
      <View style={{ borderWidth: 1 }}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "yellow" }} />
        <View style={{ flex: 3, backgroundColor: "green" }} />
        <Text style={{ fontSize: 50 }}>ABC</Text>
        <Text style={{ fontSize: 80 }}>ABC</Text>
      </View>

      <View>
        <Text style={{fontSize: 30, backgroundColor: 'cyan'}}>ABC</Text>
        <Text style={{fontSize: 40, backgroundColor: 'yellow'}}>ABC</Text>
        <Text style={{fontSize: 50, backgroundColor: 'lightgreen'}}>ABC</Text>
      </View>

      
    </>
  );
}
