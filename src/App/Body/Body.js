import React from 'react';
import { Route } from 'react-router-dom';
import '../../App.css';

import FacebookButton from '../Facebook/FacebookButton.js';

class Body extends React.Component{


    render() {
        return (
            <div id="Body">
                <p className="App-intro">
                    You need to log in to Facebook to continue:
                </p>
                <FacebookButton/>

                <Route render={({history}) => (
                    <button onClick={() => {
                        history.push('/prefill')
                    }} className="btn">Get your Quote</button>
                )}/>
            </div>

        );
    }
}

export default Body;
