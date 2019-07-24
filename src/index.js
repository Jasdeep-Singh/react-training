/*
 * @file: index.js
 * @description: It is main app file .
 * @author: Jasdeep Singh
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('demo'));
registerServiceWorker();
