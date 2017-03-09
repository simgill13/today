require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/app';
import SideBar from './components/sidebar';
import Mailbox from './components/mailbox';

const routes = (

    <Router history={hashHistory}>
        <Route path="/" component={App}>         
            <Route path=":mailboxName" component={Mailbox} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);