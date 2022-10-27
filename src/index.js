import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-5fuyz4yjisfysxjp.us.auth0.com' clientId='kOFVo2Ovj6h0GtVlP7uutDv1ZJy4zBiA' redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


