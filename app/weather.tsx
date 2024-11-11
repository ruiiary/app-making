import { ScrollView, View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
//import { API_KEY } from "@env";

var url = `http://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&cnt=5&appid=`;
var st_text = { fontSize: 20 };

const view_st = { flex: 1, padding: 20, flexDirection: "row" };

export default function App() {
  const [time0, setTime0] = useState("");
  const [date0, setDate0] = useState("");
  const [dt0, setDt0] = useState("");
  const [weather0, setWeather0] = useState("");
  const [icon0, setIcon0] = useState("");

  const [time1, setTime1] = useState("");
  const [date1, setDate1] = useState("");
  const [dt1, setDt1] = useState("");
  const [weather1, setWeather1] = useState("");
  const [icon1, setIcon1] = useState("");

  const [time2, setTime2] = useState("");
  const [date2, setDate2] = useState("");
  const [dt2, setDt2] = useState("");
  const [weather2, setWeather2] = useState("");
  const [icon2, setIcon2] = useState("");

  const [time3, setTime3] = useState("");
  const [date3, setDate3] = useState("");
  const [dt3, setDt3] = useState("");
  const [weather3, setWeather3] = useState("");
  const [icon3, setIcon3] = useState("");

  const [time4, setTime4] = useState("");
  const [date4, setDate4] = useState("");
  const [dt4, setDt4] = useState("");
  const [weather4, setWeather4] = useState("");
  const [icon4, setIcon4] = useState("");

  useEffect(function () {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setDt0(json.list[0].dt_txt);
        setDate0(dt0.slice(5, 10));
        setTime0(dt0.slice(11, 16));
        setWeather0(json.list[0].weather[0].description);
        setIcon0(
          "http://openweathermap.org/img/w/" +
            json.list[0].weather[0].icon +
            ".png",
        );

        setDt1(json.list[1].dt_txt);
        setDate1(dt1.slice(5, 10));
        setTime1(dt1.slice(11, 16));
        setWeather1(json.list[1].weather[0].description);
        setIcon1(
          "http://openweathermap.org/img/w/" +
            json.list[1].weather[0].icon +
            ".png",
        );
        console.log(dt1, date1, time1, weather1);

        setDt2(json.list[2].dt_txt);
        setDate2(dt2.slice(5, 10));
        setTime2(dt2.slice(11, 16));
        setWeather2(json.list[2].weather[0].description);
        setIcon2(
          "http://openweathermap.org/img/w/" +
            json.list[2].weather[0].icon +
            ".png",
        );

        setDt3(json.list[3].dt_txt);
        setDate3(dt3.slice(5, 10));
        setTime3(dt3.slice(11, 16));
        setWeather3(json.list[3].weather[0].description);
        setIcon3(
          "http://openweathermap.org/img/w/" +
            json.list[3].weather[0].icon +
            ".png",
        );

        setDt4(json.list[4].dt_txt);
        setDate4(dt4.slice(5, 10));
        setTime4(dt4.slice(11, 16));
        setWeather4(json.list[4].weather[0].description);
        setIcon4(
          "http://openweathermap.org/img/w/" +
            json.list[4].weather[0].icon +
            ".png",
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <View style={view_st}>
        <Image style={{ width: 70, height: 70 }} source={{ uri: icon0 }} />
        <Text style={st_text}>{date0}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{time0}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{weather0}</Text>
      </View>

      <View style={{ flex: 1, padding: 10, flexDirection: "row" }}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: icon1 }} />
        <Text style={st_text}>{date1}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{time1}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{weather1}</Text>
      </View>

      <View style={{ flex: 1, padding: 10, flexDirection: "row" }}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: icon2 }} />
        <Text style={st_text}>{date2}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{time2}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{weather2}</Text>
      </View>

      <View style={{ flex: 1, padding: 10, flexDirection: "row" }}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: icon1 }} />
        <Text style={st_text}>{date1}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{time1}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{weather1}</Text>
      </View>

      <View style={{ flex: 1, padding: 10, flexDirection: "row" }}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: icon1 }} />
        <Text style={st_text}>{date1}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{time1}</Text>
        <View style={{ margin: 5 }}></View>
        <Text style={st_text}>{weather1}</Text>
      </View>
    </>
  );
}
