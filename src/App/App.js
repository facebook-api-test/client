import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Main from './Main/Main';
import Header from './Header/Header';

class App extends Component {

  state = {
    name: ''
  };

  render() {
    return (
      <div className="App">
        <header><Header /></header>
        <Main />
      </div>
    );
  }
}

export default App;
