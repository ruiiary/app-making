import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";

export default function App() {
  const [date, setDate] = useState("");
  const [date1, setDate1] = useState("");
  const [expense, setExpense] = useState("");
  const [memo, setMemo] = useState("");

  var container = { flex: 1 };
  var box = { margin: 20 };
  var text = { fontSize: 20, marginVertical: 10 };
  var datetext = { fontSize: 20, marginVertical: 10 };

  var row_st = { flexDirection: "row", alignItems: "center" };

  var expense_st = {
    flex: 1,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: "blue",
  };
  var memo_st = {
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    color: "blue",
  };

  async function onDateChange(d: Date) {
    console.log(d.getFullYear(), d.getMonth(), d.getDate());

    var key =
      d.getFullYear().toString() +
      (d.getMonth() + 1).toString() +
      d.getDate().toString();

    setDate(key);
    setDate1(d.toDateString());

    var value = await AsyncStorage.getItem(key);
    var value_m = await AsyncStorage.getItem(key + "m");

    console.log(value);

    if (value !== null) {
      setExpense(value);
      setMemo(value_m);
    } else {
      setExpense("");
      setMemo("");
    }
  }

  async function save_memo() {
    await AsyncStorage.setItem(date, expense);
    await AsyncStorage.setItem(date + "m", memo);
  }

  return (
    <View style={container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View style={box}>
        <Text style={datetext}>{date1}</Text>
        <View style={row_st}>
          <Text style={text}>Expense</Text>
          <TextInput
            style={expense_st}
            keyboardType="numeric"
            onChangeText={setExpense}
            value={expense}
          />
          <Button title="SAVE" onPress={save_memo} />
        </View>
        <TextInput
          style={memo_st}
          placeholder="Memo"
          onChangeText={setMemo}
          value={memo}
        />
      </View>
    </View>
  );
}
