import React from "react";
import WeatherAtSpecificTime from "./WeatherAtSpecificTime";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import partlyCloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
import ImageComponent from "./ImageComponent";
export default function WeatherDuringDay(props) {
  console.log(props);
  return (
    <div className="hourlyWeather">
      <WeatherAtSpecificTime />
      <div>
        <p>06:00</p>
        <ImageComponent />
        <p>9&deg;C</p>
      </div>
      <div>
        <p>09:00</p>
        <img src={fog} />
        <p>14&deg;C</p>
      </div>
      <div>
        <p>12:00</p>
        <img src={mostlyCloudy} />
        <p>17&deg;C</p>
      </div>
      <div>
        <p>15:00</p>
        <img src={partlyCloudy} />
        <p>18&deg;C</p>
      </div>
      <div>
        <p>18:00</p>
        <img src={rain} />
        <p>16&deg;C</p>
      </div>
      <div>
        <p>21:00</p>
        <img src={unknown} />
        <p>13&deg;C</p>
      </div>
    </div>
  );
}
