import React from 'react';

const FBButton = () => {

    const showFirstName = () => {
        window.FB.login(function(response) {
            if (response.authResponse) {
             window.FB.api('/me?fields=id,email,first_name,last_name,gender', function(response) {
                console.log(response.first_name)});

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