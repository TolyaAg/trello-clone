import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';

let store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
