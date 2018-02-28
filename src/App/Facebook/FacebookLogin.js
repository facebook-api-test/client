import React from 'react';

import FacebookButton from './FacebookButton';

const FacebookLogin = () =>
{
    //first function
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    //second function
    window.fbAsyncInit = function() {
        window.FB.init({
            appId      : '1011209039030733',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.8'
        });

        window.FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });

        window.FB.Event.subscribe('auth.authResponseChange', function(response) {
            if (response.status === 'connected') {
                console.log('Event: Connected');
            } else if (response.status === 'not_authorized') {
                console.log('Event: Not_Authorized');
            } else {
                console.log('Event: Unknown');
            }
        });
    };

    //third function
    function statusChangeCallback(response) {
        if (response.status === 'connected') {
            testAPI();
        } else {
            console.log('You are not logged in');
        }
    }

    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
        });
    }

    return (
        <FacebookButton />
    );
}

export default FacebookLogin;