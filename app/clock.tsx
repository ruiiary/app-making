import { Text, View, Image, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";

var text_st = {
  fontSize: 60,
  padding: 10,
  backgroundColor: "#F9ECD7",
};

export default function clock() {
  const [hh, sethh] = useState("");
  const [mm, setmm] = useState("");
  const [ss, setss] = useState("");
  const [ap, setap] = useState("");

  useEffect(function () {
    setInterval(run_everysec, 1000);
  }, []);
  // parse -> Object로 만듦
  function run_everysec() {
    var d = new Date();
    sethh(d.getHours());
    setmm(d.getMinutes());
    setss(d.getSeconds());

    if (d.getHours() < 12) {
      setap("AM");
    } else {
      setap("PM");
    }
  }

  var json_pbook = '[{"name": "June", "phone": "3347"}, {"name": "Ewha", "phone": "1122"}]';
  var pbook = JSON.parse(json_pbook);
  console.log(pbook[0].name);
  console.log(pbook[1].phone);

  return (
    <View>
      <Text style={text_st}>
        <Text style={{ fontWeight: "bold", color: "black" }}>{hh}:</Text>
        <Text style={{ fontWeight: "bold", color: "black" }}>{mm}</Text>:
        <Text>{ss}</Text> {ap}
      </Text>
    </View>
  );
}
