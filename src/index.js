import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
<Auth0Provider
domain="ashutosh1604.us.auth0.com"
clientId="pxJKSvzS8puKGAQgMobcHUffZoXK28Qb"
redirectUri={window.location.origin}
>

<App />

</Auth0Provider>,
document.getElementById('root'));
