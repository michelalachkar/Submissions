import React, { Component } from "react";
import "./App.css";

import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDuringDay from "./components/WeatherDuringDay";
import fakeWeather from "./FakeWeather.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      apiData: {
        cityName: "",
        minTemp: "",
        maxTemp: "",
        humidity: "",
        pressure: "",
        weatherDescription: "",
        imgInfo: ""
      }
    };
  }
  tempConv = kalvin => {
    return Math.round(kalvin - 273.15);
  };
  updateCityName = receivedCityName => {
    this.setState({ cityName: receivedCityName });
  };
  componentDidMount() {
    this.setState({
      apiData: {
        cityName: fakeWeather.city.name,
        minTemp: this.tempConv(fakeWeather.list[0].main.temp_min),
        maxTemp: this.tempConv(fakeWeather.list[0].main.temp_max),
        humidity: fakeWeather.list[0].main.humidity,
        pressure: fakeWeather.list[0].main.pressure,
        weatherDescription: fakeWeather.list[0].weather[0].description,
        imgInfo: fakeWeather.list[0].weather[0].id
      }
    });
  }
  render() {
    return (
      <div className="app">
        <Search getCityName={this.updateCityName} />
        {this.state.cityName != "" && (
          <main className="app_main">
            <CurrentWeather
              minTemp={this.state.apiData.minTemp}
              maxTemp={this.state.apiData.maxTemp}
              humidity={this.state.apiData.humidity}
              pressure={this.state.apiData.pressure}
              weatherDescription={this.state.apiData.weatherDescription}
              imgInfo={this.state.apiData.imgInfo}
            />
            <WeatherDuringDay />
          </main>
        )}
      </div>
    );
  }
}

export default App;
