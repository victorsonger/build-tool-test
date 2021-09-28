import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const httpRequest = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    withCredentials: true, // default: false
  },
});
console.log('dfasfasf');

httpRequest({
  method: 'get',
  url: '/todos/1',
  data: {},
})