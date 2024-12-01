import { Text, View, Image, Button, TextInput } from "react-native";
import { useState } from "react";

var input_st = {
  fontSize: 30,
  backgroundColor: "lightgray",
  padding: 10,
  margin: 10,
};
var text_st = {
  fontSize: 30,
  padding: 10,
  margin: 10,
};

export default function Multiplication() {
  const [A, setA] = useS.tate(0);
  const [B, setB] = useState(0);

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={input_st}>{A}</Text>
        <Text style={text_st}>X</Text>
        <Text style={input_st}>{B}</Text>
        <Text style={text_st}>=</Text>
        <Text style={input_st}>{A * B}</Text>
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <View style={{ marginHorizontal: 20 }}>
          <Button
            title="   +   "
            onPress={function () {
              setA(A + 1);
            }}
          />
        </View>
        <Button
          title="   +   "
          onPress={function () {
            setB(B + 1);
          }}
        />
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <View style={{ marginHorizontal: 20 }}>
          <Button
            title="   -   "
            onPress={function () {
              setA(A - 1);
            }}
          />
        </View>
        <Button
          title="   -   "
          onPress={function () {
            setB(B - 1);
          }}
        />
      </View>
    </View>
  );
}
