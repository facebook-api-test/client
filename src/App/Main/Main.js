import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Selector from '../Selector/Selector';
import FBButton from "../Selector/FBButton/FBButton";

class Main extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={Selector} />
                <Route exact path='/boi' component={FBButton} />
            </Switch>
        );
    }
}

export default Main;