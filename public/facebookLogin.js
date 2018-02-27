

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    //user_education_history,user_work_history
    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me?fields=id,email,first_name,last_name,gender', function(response) {
        document.getElementById('first').innerHTML =
        'First Name: ' + response.first_name;

        document.getElementById('last').innerHTML =
        'Last Name: ' + response.last_name;

        document.getElementById('email').innerHTML =
        'Email: ' + response.email;

        document.getElementById('gender').innerHTML =
        'Gender: ' + response.gender;

        });



    }


