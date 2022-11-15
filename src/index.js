import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Auth0Provider
      domain= "dev-4w8pxeptdxwrsrrw.us.auth0.com"
      clientId= "SsQY7y7s1Od36f3PM0Y5zrdUVRQx3frx"
      redirectUri={window.location.origin}
      audience= "this is unique identifier"
      scope = "openid profile email"
      >

      <App />
      </Auth0Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
