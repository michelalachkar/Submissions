import React from "react";
import WeatherAtSpecificTime from "./WeatherAtSpecificTime";
export default function WeatherDuringDay(props) {
  return (
    <div className="hourlyWeather">
      {props.list.map(info => {
        return <WeatherAtSpecificTime key={info.dt} info={info} />;
      })}
    </div>
  );
}
