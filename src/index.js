import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-roboto';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
	document.getElementById('root'),
);
