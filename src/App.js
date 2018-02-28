import React, { Component } from 'react';
import './App.css';

import Body from './App/Body/Body.js';
import Header from './App/Header/Header.js';
import FacebookLogin from './App/Facebook/FacebookLogin.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <FacebookLogin />

      </div>
    );
  }
}

export default App;
