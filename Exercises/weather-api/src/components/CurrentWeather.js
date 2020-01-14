import React from "react";
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
export default function CurrentWeather(props) {
  console.log(props);
  return (
    <div className="current_weather">
      <div className="imgAndInfo">
        <img src={clear} />
        <p>overcast clouds</p>
      </div>
      <div className="info">
        <div className="temperature">
          <p>
            <strong>Temperature</strong>
          </p>
          <p>10&deg; to 11&deg; C</p>
        </div>
        <div className="otherWeatherInfo">
          <div className="humidity">
            <p>
              <strong>Humidity</strong>
            </p>
            <p>78%</p>
          </div>
          <div className="pressure">
            <p>
              <strong>Pressure</strong>
            </p>
            <p>1008.48</p>
          </div>
        </div>
      </div>
    </div>
  );
}
