import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Body from './App/Body/Body.js';
import Header from './App/Header/Header.js';
import FacebookLogin from './App/Facebook/FacebookLogin.js';
import Prefill from "./App/PrefillPage/PrefillPage";


class App extends Component {
  render() {
    return (
      <div className="App">
          <FacebookLogin />
          <Header />
          <Switch>
              <Route exact path='/'  component={Body}/>
              <Route exact path='/prefill' component={Prefill}/>
          </Switch>
      </div>
    );
  }
}

export default App;
