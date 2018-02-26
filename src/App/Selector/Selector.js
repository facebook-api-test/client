import React from 'react';

import { Route } from 'react-router-dom';

const Selector = () => {
    return (
        <div>
            <Route render={({ history }) => (
                <button onClick={() => {
                    history.push('/app')
                }} className="btn btn-primary">Boiiiiii</button>
            )} />
            <br />
            <Route render={({ history }) => (
                <button onClick={() => {
                    history.push('/boi')
                }} className="btn btn-primary">What do</button>
            )} />
        </div>
    );
}

export default Selector;