import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/null.scss'
import './scss/style.scss'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<App />
)