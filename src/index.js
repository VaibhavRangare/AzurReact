import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
//import { GoogleOAuthProvider } from "@react-oauth/google"
//const serverless = require("serverless-http")
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('AIPortalRoot'));
root.render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
 
);
//serviceWorkerRegistration.register();
//serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//module.exports.handler = serverless(root)
