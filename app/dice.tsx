import { ScrollView, View, Text, Button } from "react-native";
import { useState } from "react";

function Circle() {
  return <View style={st_circle} />;
}

function Blank() {
  return (
    <View
      style={[
        st_circle,
        { backgroundColor: "rgb(255, 240, 200)", borderWidth: 0 },
      ]}
    />
  );
}

var st_circle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "rgb(0, 200, 255)",
  borderWidth: 1,
  margin: 2,
};

var st_dice = {
  backgroundColor: "rgb(255, 240, 200)",
  padding: 10,
};

var st_text = {
  textAlign: "center",
  fontSize: 20,
  margin: 5,
};

function Dice(props) {
  if (props.num == 1) {
    return (
      <ScrollView>
        <View style={st_dice}>
          <View style={{ flexDirection: "row" }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Blank />
            <Circle />
            <Blank />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Blank />
            <Blank />
            <Blank />
          </View>
        </View>
      </ScrollView>
    );
  } else if (props.num == 2) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 3) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 4) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 5) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  }
}

export default function App() {
  const [N, setN] = useState(1);
  const [M, setM] = useState(1);

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={{ flex: 1 }}>
        <Text style={st_text}>Double Dice</Text>
        <Text style={st_text}>{N + M}</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Dice num={N} />
          <View style={{ width: 15 }} />
          <Dice num={M} />
        </View>
        <View style={{ marginHorizontal: 100, marginVertical: 30 }}>
          <Button
            title="Roll"
            onPress={function () {
              setN(Math.floor(Math.random() * 6 + 1));
              setM(Math.floor(Math.random() * 6 + 1));
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
