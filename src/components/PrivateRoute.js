import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...props }) => {
  const { user } = props;
  
  console.log(user)

  return (
    <Route
      {...props}
      render={propsFromRoute => (
        !!user ? (
          <Component {...propsFromRoute} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: propsFromRoute.location }
            }}
          />
        )
      )}
    />
  );
};

export default PrivateRoute;
