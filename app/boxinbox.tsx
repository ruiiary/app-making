import { Text, View, Image, Button, TextInput } from "react-native";
import { useState } from "react";

var text_st = {
  fontSize: 20,
  borderWidth: 1,
  borderColor: "gray",
  flex: 1,
  padding: 5,
  margin: 2,
};

var input_st = { fontSize: 20, borderWidth: 1, flex: 1, padding: 5, margin: 5 };

var N = ["Ewha", "June", "Jane", "Nick"];
var P = [1234, 3347, 1111, 1212];

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refresh, setRefresh] = useState(0); // dummy state for forcing redraw

  function add_item() {
    N.push(name);
    P.push(phone);
    setRefresh(refresh + 1); // dummy state for forcing redraw
  }

  var L = [];

  for (var i = 0; i < N.length; i++) {
    var a = (
      <View style={{ flexDirection: "row" }}>
        <Text style={text_st}>{N[i]}</Text>
        <Text style={text_st}>{P[i]}</Text>
      </View>
    );
    L.push(a);
  }
  console.log(N, P);

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Phone Book</Text>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <TextInput style={input_st} onChangeText={setName} />
        <TextInput style={input_st} onChangeText={setPhone} />
        <Button title=" Add " onPress={add_item} />
      </View>
      {L}
    </View>
  );
}
