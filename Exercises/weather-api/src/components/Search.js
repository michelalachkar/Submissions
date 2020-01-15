import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: ""
    };
  }

  changeCityName = e => {
    this.setState({ cityName: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getCityName(this.state.cityName);
  };
  render() {
    return (
      <header className="app_header">
        <form onSubmit={this.handleSubmit} className="search_bar">
          <input
            type="text"
            name="city"
            className="search_field"
            placeholder="location"
            value={this.state.cityName}
            onChange={this.changeCityName}
          />
          <input
            className="search_button"
            type="submit"
            name="submit"
            value="FIND WEATHER"
          />
        </form>
      </header>
    );
  }
}
