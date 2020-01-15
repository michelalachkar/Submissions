import React, { Component } from "react";
import "./App.css";

import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDuringDay from "./components/WeatherDuringDay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      apiData: {}
    };
  }

  updateCityName = receivedCityName => {
    this.setState({ cityName: receivedCityName });
  };

  render() {
    return (
      <div className="app">
        <Search getCityName={this.updateCityName} />
        <main className="app_main">
          <CurrentWeather />
          <WeatherDuringDay />
        </main>
      </div>
    );
  }
}

export default App;
