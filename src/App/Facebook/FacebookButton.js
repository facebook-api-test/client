import React from 'react';

const FacebookButton = () => {
    return (
        <div
            className="fb-login-button"
            data-max-rows="1"
            data-size="large"
            data-button-type="continue_with"
            data-show-faces="false"
            data-auto-logout-link="true"
            data-use-continue-as="true"
            data-scope="public_profile,email"
            ></div>
    );
}

export default FacebookButton;