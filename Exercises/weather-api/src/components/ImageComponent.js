import React from "react";
import clear from "../img/weather-icons/clear.svg";
//import cloudy from "../img/weather-icons/cloudy.svg"; thanks for the svg but we never used it lol
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import partlyCloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";

export default function ImageComponent(props) {
  let corresponding = {
    svg: "",
    alt: ""
  };
  switch (true) {
    case props.imgId < 300:
      corresponding = {
        svg: storm,
        alt: "storm image"
      };
      break;

    case props.imgId >= 300 && props.imgId < 499:
      corresponding = {
        svg: drizzle,
        alt: "drizzle image"
      };
      break;

    case props.imgId >= 500 && props.imgId < 599:
      corresponding = {
        svg: rain,
        alt: "rain image"
      };
      break;

    case props.imgId >= 600 && props.imgId < 699:
      corresponding = {
        svg: snow,
        alt: "snow image"
      };
      break;

    case props.imgId >= 700 && props.imgId < 799:
      corresponding = {
        svg: fog,
        alt: "fog image"
      };
      break;

    case props.imgId === 800:
      corresponding = {
        svg: clear,
        alt: "clear image"
      };
      break;

    case props.imgId === 801:
      corresponding = {
        svg: partlyCloudy,
        alt: "partly cloudy image"
      };
      break;

    case props.imgId > 801 && props.imgId < 805:
      corresponding = {
        svg: mostlyCloudy,
        alt: "mostly cloudy image"
      };
      break;
    default:
      corresponding = {
        svg: unknown,
        alt: "unknown image"
      };
      break;
  }

  return <img src={corresponding.svg} alt={corresponding.alt} />;
}
