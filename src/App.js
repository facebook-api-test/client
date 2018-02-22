import React, { Component } from 'react';
import fieri from './guy-fieiri-flame.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">WELCOME TO FLAVOR TOWN</h1>
        </header>
      <body className="Flavor">
      <img src={fieri} className="App-logo" alt="logo" />
      </body>
      </div>
    );
  }
}

export default App;
