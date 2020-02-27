import React, { useCallback } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { firebase } from '../api/firebase';
import withUser from '../contexts/User';

const Login = ({ history, user, authHandler }) => {
    const handleLogin = useCallback(
        async e => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            try {
                await firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(credentials => {
                    authHandler(credentials.user);
                });
                // history.push('/');
            } catch (err) {
                throw new Error (err);
            }
        },
        [history]
    )

    if (user) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
                <label>
                    email
                    <input name="email" type="email" />
                </label>
                <label>
                    password
                    <input name="password" type="password" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>

    )
}

export default withRouter(withUser(Login));