import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cell from './stores/Cell.js';
import CellStore from './stores/CellStore.js';
import WebSocketService from './WebSocketService.js';

const cellStore = new CellStore(new WebSocketService());

window.cellStore = cellStore;

ReactDOM.render(<App store={cellStore} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();