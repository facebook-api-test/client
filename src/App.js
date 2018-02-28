import React, { Component } from 'react';
import './App.css';

import Body from './App/Body/Body.js';
import Header from './App/Header/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
