import React from 'react';

const FBButton = () => {

    const showFirstName = () => {
        window.FB.login(function(response) {
            if (response.authResponse) {
             window.FB.api('/me', function(response) {
             });
            } else {
            }
        }, {scope: "public_profile,user_birthday,user_education_history,user_work_history,email"});
    }

    return (
        <div>
            <button onClick={showFirstName}>Log In</button>
        </div>
    );
}

export default FBButton;