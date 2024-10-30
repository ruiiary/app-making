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

var pbook = [{name:'Ewha', phone:1234}, {name:'June', phone:3347}, {name:'Jane', phone:1111}, {name:'Nick', phone:1212}];

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refresh, setRefresh] = useState(0); // dummy state for forcing redraw

  function add_item() {
    pbook.push({name: name, phone: phone});
    setRefresh(refresh + 1); // dummy state for forcing redraw
  }

  var L = [];

  for (var i = 0; i < pbook.length; i++) {
    var a = <Text style={{fontSize: 20}}>{pbook[i].name} : {pbook[i].phone} </Text>
    L.push(a);
  }

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
