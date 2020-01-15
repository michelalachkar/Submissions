import React, { Component } from "react";
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

export default function ImageComponent(props) {
  const correspondingImg = () => {
    switch (true) {
      case props.imgId < 300:
        return storm;

      case props.imgId > 300 && props.imgId < 499:
        return drizzle;

      case props.imgId > 500 && props.imgId < 599:
        return rain;

      case props.imgId > 600 && props.imgId < 699:
        return snow;

      case props.imgId > 700 && props.imgId < 799:
        return fog;

      case props.imgId === 800:
        return clear;

      case props.imgId == 801:
        return partlyCloudy;

      case props.imgId > 801 && props.imgId < 805:
        return mostlyCloudy;
      default:
        return unknown;
    }
  };
  return <img src={correspondingImg()} />;
}
