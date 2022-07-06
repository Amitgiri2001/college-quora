import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// react time ago function //template code
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

ReactDOM.render(
  // react strict mode is used in developed mode . for error checking
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
