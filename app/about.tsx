import { Text, View, Image, Button, TextInput } from "react-native";
import {useState} from 'react';

export default function about() {
  const [greet, setGreet] = useState("Hi");

  return (
      <View style={{ margin: 10, flexDirection: "row-reverse" }}>
        <Text>This is about the app.</Text>
        <Image style={{width:200, height: 200}}
        source={require('./cat-icon.png')}/>
      </View>
  );
}
