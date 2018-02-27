import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Selector from '../Selector/Selector';
import Boi from '../Boi/Boi';

class Main extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={Selector} />
                <Route exact path='/boi' component={Boi} />
            </Switch>
        );
    }
}

export default Main;