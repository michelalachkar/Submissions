import React, { Component } from "react";
import "./App.css";

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
              <img src="http://placekitten.com/200/300" />
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
              <img src="http://placekitten.com/200/300" />
              <p>8&deg;C</p>
            </div>
            <div>
              <p>06:00</p>
              <img src="http://placekitten.com/200/300" />
              <p>9&deg;C</p>
            </div>
            <div>
              <p>09:00</p>
              <img src="http://placekitten.com/200/300" />
              <p>14&deg;C</p>
            </div>
            <div>
              <p>12:00</p>
              <img src="http://placekitten.com/200/300" />
              <p>17&deg;C</p>
            </div>
            <div>
              <p>15:00</p>
              <img src="http://placekitten.com/200/300" />
              <p>18&deg;C</p>
            </div>
            <div>
              <p>18:00</p>
              <img src="http://placekitten.com/200/300" />
              <p>16&deg;C</p>
            </div>
            <div>
              <p>21:00</p>
              <img src="http://placekitten.com/200/300" />
              <p>13&deg;C</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
