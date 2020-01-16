import React, { Component } from "react";
import "./App.css";

import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDuringDay from "./components/WeatherDuringDay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      apiData: {
        minTemp: "",
        maxTemp: "",
        humidity: "",
        pressure: "",
        weatherDescription: "",
        imgInfo: "",
        tempList: []
      }
    };
  }
  updateCityName = receivedCityName => {
    this.apiRequest(receivedCityName);
  };

  apiRequest = city => {
    const apiKey = "48ac09ad1420fa302200cc07ecfeffa0";
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let today = data.list.shift();
        return this.setState({
          flag: true,
          apiData: {
            minTemp: Math.round(today.main.temp_min),
            maxTemp: Math.round(today.main.temp_max),
            humidity: today.main.humidity,
            pressure: today.main.pressure,
            weatherDescription: today.weather[0].description,
            imgInfo: today.weather[0].id,
            tempList: [...data.list]
          }
        });
      })
      .catch(error => {
        if (error) {
          alert("Please insert a correct city name");
        }
      });
  };
  render() {
    return (
      <div className="app">
        <Search getCityName={this.updateCityName} />
        {this.state.flag && (
          <main className="app_main">
            <CurrentWeather
              minTemp={this.state.apiData.minTemp}
              maxTemp={this.state.apiData.maxTemp}
              humidity={this.state.apiData.humidity}
              pressure={this.state.apiData.pressure}
              weatherDescription={this.state.apiData.weatherDescription}
              imgInfo={this.state.apiData.imgInfo}
            />
            <WeatherDuringDay list={this.state.apiData.tempList} />
          </main>
        )}
      </div>
    );
  }
}

export default App;
