import React from "react";

export default function Search(props) {
  console.log(props);
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
