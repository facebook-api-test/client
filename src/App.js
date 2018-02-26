import React, { Component } from 'react';
import fieri from './guy-fieiri-flame.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">WELCOME TO FLAVOR TOWN</h1>
            <table className="App-table">
                <tr className="App-row-default"><div className="fb-login-button App-fill" scope="public_profile, user_birthday, user_education_history, user_work_history, email" data-max-rows={1} data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto- logout-link="true" data-use-continue-as="false" /></tr>

                <tr className="App-row-default"><h2 className="App-fill" id="first" /></tr>
                <tr className="App-row-default"><h2 className="App-fill" id="last" /></tr>
                <tr className="App-row-default"><h2 className="App-fill" id="email" /></tr>
                <tr className="App-row-default"><h2 className="App-fill" id="gender" /></tr>



            </table>
            
        </header>
      </div>
    );
  }
}

export default App;
