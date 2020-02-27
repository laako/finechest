import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import AppDataProvider from './AppDataProvider';
import { firebase } from './api/firebase';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
	const [user, setUser] = useState(null);
	const [isLoggingIn, setIsLoggingIn] = useState(true);

	/**
	 * Listen to auth state change on component mount and
	 * set user to be user from auth or null if not logged in
	 */
	useEffect(() => {
		const unsubscriber = firebase.auth().onAuthStateChanged(authUser => {
			setIsLoggingIn(false);
			setUser(authUser || null);
		});

		return unsubscriber;
	}, []);

	useEffect(() => {
		console.log(user)
	}, [user])

	/**
	 * Log user out
	 */
	const logout = () => {
		firebase.auth().signOut();
	};

	return (
		<Router>
			<AppDataProvider user={user}>
				<Container>
					<Typography variant='h4' component='h1'>
						Finechest
					</Typography>
					{!user && isLoggingIn && (
						<div className='c-centered'>
							<div>Signing in...</div>
						</div>
					)}

					<button onClick={() => firebase.auth().signOut()}>Logout</button>
					<Switch>
						<Route exact path='/login' render={() => <Login isLogin={!!user} authHandler={setUser} />} />
						<PrivateRoute exact path='/' user={user} component={Home} />
						<Route>
							<p>Not found</p>
						</Route>
					</Switch>
				</Container>
			</AppDataProvider>
		</Router>
	);
};

export default App;
