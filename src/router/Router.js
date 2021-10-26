import React from 'react';
import { Switch, Route } from 'react-router-dom';
import homePage from '../pages/homePage/homePage.jsx';
import loginPage from '../pages/loginPage/loginPage.jsx';
import userPage from '../pages/userPage/userPage.jsx';
import accountPage from '../pages/accountPage/accountPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';

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

        const protectedRoutes = [
            {
                path: '/profile',
                component: userPage
            },
            {
                path: '/account/:id',
                component: accountPage
            }
        ];
        return (
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}

                {protectedRoutes.map((route) => (
                    <PrivateRoute key={route.path} {...route} />
                ))}
            </Switch>
        );
    }
}

export default Router;
