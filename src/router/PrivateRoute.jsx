import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { selectToken } from 'utils/selectors';

function PrivateRoute({ component: Component, ...rest }) {
    let token = useSelector(selectToken);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                token.data != null ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;
