import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import xhook from 'xhook';
import { HLS_MANIFEST_URL } from './config';

xhook.enable();

xhook.before((request) => {
  console.log(`%c REQUEST: ${request.url}`, 'color: gray');
  if (request.url === HLS_MANIFEST_URL) {
    console.log(`%c REQUEST: ${request.url}`, 'color: red');
    request.url = request.url + 'm3u8';
    console.log(`%c REQUEST NEW: ${request.url}`, 'color: green');
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
