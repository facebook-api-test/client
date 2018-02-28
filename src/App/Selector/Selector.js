import React from 'react';

import { Route } from 'react-router-dom';

import FBButton from './FBButton/FBButton';

import './Selector.css';

class Selector extends React.Component {
    // This is called with the results from from FB.getLoginStatus().
    statusChangeCallback (response) {
        if (response.status === 'connected') {
            console.log('You did it!');
        } else {

        }
    }

    componentDidMount () {
        console.log('Hello');
        window.fbAsyncInit = () => {
            window.FB.init({
              appId            : '1011209039030733',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v2.12'
            });

            window.FB.getLoginStatus((response) => {
                this.statusChangeCallback(response);
            });
        };

        // Load the SDK asynchronously
        ((d, s, id) => {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    render() {
        return (
            <div>
                <br />
                <Route render={({ history }) => (
                    <button onClick={() => {
                        history.push('/app')
                    }} className="btn">Get your Quote</button>
                )} />
                <br />
                Or
                <br />
                <FBButton />
            </div>
        );
    }
}

export default Selector;