import React from 'react';
import { Switch, Route } from 'react-router-dom';
import homePage from './homePage/homePage';

class Router extends React.Component {
    render() {
        const routes = [
            {
                path: '/',
                component: homePage
            }
        ];
        return (
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Switch>
        );
    }
}

export default Router;
