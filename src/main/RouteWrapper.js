import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../components/_layouts/auth/index';
import DefaultLayout from '../components/_layouts/default/index';

export default function RouteWrapper({
    isPrivate = false,
    component: Component,
    ...rest // esse sao todos os outros atributos, como 'exact','path','exact','from'
}) {
    const signed = true;

    if(signed === false) {
        if(!signed && isPrivate) {
            return <Redirect to="/signup" />
        }
    }

    if(signed && !isPrivate) {
        return <Redirect to="/users" />
    }
    
    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        // <Router>
        //     <Route {...rest} render={() => <Layout></Layout>} />
        // </Router>
        // <Route path='/' component={DefaultLayout}/>
        <Route
            {...rest}
            // component={Layout}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}