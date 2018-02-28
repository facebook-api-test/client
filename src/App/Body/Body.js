import React from 'react';
import '../../App.css';

import FacebookLogin from '../Facebook/FacebookLogin.js';

const Body = () =>
{
    return (
        <div id="Body">
            <p className="App-intro">
                You need to log in to Facebook to continue:
            </p>
            <FacebookLogin />
        </div>

    );
}

export default Body;
