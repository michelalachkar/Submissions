import React, { Component } from "react";
import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import partlyCloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app_header">
          <div className="search_bar">
            <input
              type="text"
              name="city"
              className="search_field"
              placeholder="location"
            />
            <input
              className="search_button"
              type="button"
              name="submit"
              value="FIND WEATHER"
            />
          </div>
        </header>
        <main className="app_main">
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
          <div className="hourlyWeather">
            <div>
              <p>03:00</p>
              <img src={cloudy} />
              <p>8&deg;C</p>
            </div>
            <div>
              <p>06:00</p>
              <img src={drizzle} />
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
        </main>
      </div>
    );
  }
}

export default App;
