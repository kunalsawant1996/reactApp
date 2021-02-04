import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getLocalStorageItem } from '../infrastructure/localStorage';

export const ProtectedAdminRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            const isAuthenticate = JSON.parse(getLocalStorageItem("auth", true));
            if (isAuthenticate && isAuthenticate.userType === 1) {
                return <Component {...props} />
            } else  {
                return <Redirect
                    to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }
                />
            }
        }} />
)