import React from 'react';
import { Switch, Redirect } from 'react-router';
import Route from './RouteWrapper';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';
import SignUp from '../pages/signUp/index';

export default function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home} isPrivate/>
            <Route path='/users' component={UserCrud} isPrivate/>

            <Route path='/signup' component={SignUp} />

            <Redirect from='*' to='/' />
        </Switch>
    )
    
}