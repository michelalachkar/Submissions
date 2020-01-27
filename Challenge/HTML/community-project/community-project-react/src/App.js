import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Navigation from './components/Navigation'
function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainPage/>
      
    </div>
  );
}

export default App;
