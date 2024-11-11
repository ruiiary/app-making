import { ScrollView, View, Text, Image } from "react-native";
import { useState, useEffect } from "react";

var url =
  "http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=c9b8112129f50b492d546f1047acb8f8";
var st_text = { fontSize: 20 };

export default function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(function () {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        setCity(json.name);
        setCountry(json.sys.country);
        setTemp(json.main.temp);
        setWeather(json.weather[0].description);
        setWind(json.wind.speed);
        setIcon(
          "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png",
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={st_text}>City: {city}</Text>
      <Text style={st_text}>Country: {country}</Text>
      <Text style={st_text}>Temp: {temp}</Text>
      <Text style={st_text}>Weather: {weather}</Text>
      <Text style={st_text}>Wind: {wind}</Text>
      <Image style={{ width: 100, height: 100 }} source={{ uri: icon }} />
    </View>
  );
}
