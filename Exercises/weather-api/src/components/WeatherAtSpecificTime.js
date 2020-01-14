import React from "react";
import ImageComponent from "./ImageComponent";
export default function WeatherAtSpecificTime(props) {
  console.log(props);
  return (
    <div>
      <p>03:00</p>
      <ImageComponent />
      <p>8&deg;C</p>
    </div>
  );
}
