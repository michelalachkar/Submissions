import React from "react";
import ImageComponent from "./ImageComponent";
export default function CurrentWeather(props) {
  return (
    <div className="current_weather">
      <div className="imgAndInfo">
        <ImageComponent imgId={props.imgInfo} />
        <p>{props.weatherDescription}</p>
      </div>
      <div className="info">
        <div className="temperature">
          <p>
            <strong>Temperature</strong>
          </p>
          <p>
            {props.minTemp}&deg; to {props.maxTemp}&deg; C
          </p>
        </div>
        <div className="otherWeatherInfo">
          <div className="humidity">
            <p>
              <strong>Humidity</strong>
            </p>
            <p>{props.humidity}%</p>
          </div>
          <div className="pressure">
            <p>
              <strong>Pressure</strong>
            </p>
            <p>{props.pressure}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
