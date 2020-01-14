import React from "react";
import cloudy from "../img/weather-icons/cloudy.svg";
export default function WeatherAtSpecificTime(props) {
  console.log(props);
  return <img src={cloudy} />;
}
