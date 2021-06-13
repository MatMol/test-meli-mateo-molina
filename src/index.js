import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './containers/Layout';
import './index.scss';

let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Layout />
  </Router>,
  document.getElementById('root')
);

