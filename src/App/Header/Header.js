import React from 'react';
import logo from '../../logo.svg';
import homer from '../../homer.gif';
import '../../App.css';

const Header = () =>
{
    return (
        <header className="App-header">
          <img src={homer} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    );
}

export default Header;
