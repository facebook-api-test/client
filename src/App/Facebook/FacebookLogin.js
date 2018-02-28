import React from 'react';

import FacebookButton from './FacebookButton';

const FacebookLogin = () =>
{
    //first function
    (function(d, s, id) {
        console.log('other Function');
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    //second function
    window.fbAsyncInit = function() {
        console.log('fbAsyncInit');
        window.FB.init({
            appId      : '1011209039030733',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.8'
        });

        window.FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    };

    //third function
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            testAPI();
        } else {
            console.log('You are not logged in');
        }
    }

    function checkLoginState() {
        console.log('checkLoginState');
        window.FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }

    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('Body').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        });
    }

    return (
        <FacebookButton />
    );
}

export default FacebookLogin;