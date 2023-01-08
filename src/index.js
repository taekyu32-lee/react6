import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';

import App from './App';
import reducer from './store';
const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

