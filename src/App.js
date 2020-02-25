import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import AppDataProvider from './AppDataProvider';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
	return (
		<Router>
			<AppDataProvider>
				<Container>
					<Typography variant='h4' component='h1'>
						Finechest
					</Typography>
					<Switch>
						<Route exact path='/home' render={() => <Home />} />
						<Route render={() => <Login />} />
					</Switch>
				</Container>
			</AppDataProvider>
		</Router>
	);
};

export default App;
