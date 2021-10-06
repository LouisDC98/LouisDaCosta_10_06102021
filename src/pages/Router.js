import React from 'react';
import { Switch, Route } from 'react-router-dom';
import homePage from './homePage/homePage.jsx';
import loginPage from './loginPage/loginPage.jsx';

class Router extends React.Component {
    render() {
        const routes = [
            {
                path: '/',
                component: homePage,
                exact: true
            },
            {
                path: '/login',
                component: loginPage
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
