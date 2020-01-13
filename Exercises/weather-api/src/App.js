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
        <header className="app__header">
          <h1>Michel Al Achkar</h1>
        </header>
        <main className="app__main"></main>
      </div>
    );
  }
}

export default App;
