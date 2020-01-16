import React from "react";
import ImageComponent from "./ImageComponent";
export default function WeatherAtSpecificTime(props) {
  return (
    <div>
      <p>{props.info.dt_txt.split(" ")[1].substring(0, 5)}</p>
      <ImageComponent imgId={props.info.weather[0].id} />
      <p>{Math.round(props.info.main.temp)}&deg;C</p>
    </div>
  );
}
