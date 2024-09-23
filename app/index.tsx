import { Text, View, Image, Button, TextInput } from "react-native";
import { useState } from "react";

var text_st = {
  fontSize: 30,
  backgoundColor: "lightgray",
  padding: 10,
  margin: 10,
};
var input_st = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };

export default function Index() {
  const [greet, setGreet] = useState("Hi");
  const [name, setName] = useState("Name");

  const [val, setVal] = useState(0);

  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <View>
      <View>
        <Text style={text_st}>
          {greet}, {name}
        </Text>
        <TextInput style={input_st} onChangeText={setName} />
      </View>

      <View style={{ margin: 10, flexDirection: "row-reverse" }}>
        <View style={{ backgroundColor: "#D3E3EE", borderRadius: 10 }}>
          <Button
            title="Nice"
            onPress={function () {
              setGreet("Nice to meet you");
            }}
          />
        </View>
        <View style={{ width: 5 }}></View>
        <View style={{ backgroundColor: "#D3E3EE", borderRadius: 10 }}>
          <Button
            title="Hello"
            onPress={function () {
              setGreet("Hello");
            }}
          />
        </View>
      </View>
      <Text style={text_st}>{val}</Text>
      <View style={{ margin: 20 }}>
        <Button
          title="Count Up"
          onPress={function () {
            setVal(val + 1);
          }}
        />
        <View style={{ height: 10 }}></View>
        <Button
          title="Count Down"
          onPress={function () {
            setVal(val - 1);
          }}
        />
      </View>

      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={text_st}>{A}</Text>
          <Text style={text_st}>X</Text>
          <Text style={text_st}>{B}</Text>
          <Text style={text_st}>=</Text>
          <Text style={text_st}>{A * B}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="   +   "
            onPress={function () {
              setA(A + 1);
            }}
          />
          <Button
            title="   +   "
            onPress={function () {
              setB(B + 1);
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="   -   "
            onPress={function () {
              setA(A - 1);
            }}
          />
          <Button
            title="   -   "
            onPress={function () {
              setB(B - 1);
            }}
          />
        </View>
      </View>

      {/*<Image style={{width:200, height: 200}} source={require('./cat-icon.png')} />*/}
    </View>
  );
}
