import React, { createContext } from 'react'

const UserContext = createContext(null);

const withUser = Component => props => (
    <UserContext.Consumer>
        {({ user }) => (
            <Component
                {...props}
                user={user}
            />
        )}
    </UserContext.Consumer>
);

export default withUser;
export { UserContext }