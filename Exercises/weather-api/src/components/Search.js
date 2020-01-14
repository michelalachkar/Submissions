import React from "react";

export default function Search(props) {
  getCityName = e => {
    return (this.props.cityName = this.e.value);
  };
  return (
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
  );
}
