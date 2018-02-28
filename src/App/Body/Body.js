import React from 'react';
import '../../App.css';

import FacebookButton from '../Facebook/FacebookButton.js';

const Body = () =>
{

    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me?fields=first_name', function(response) {
            console.log(response.first_name);
        });
    }

    return (
        <div id="Body">
            <p className="App-intro">
                You need to log in to Facebook to continue:
            </p>
            <FacebookButton/>
            <button onClick={testAPI}></button>
        </div>

    );
}

export default Body;
