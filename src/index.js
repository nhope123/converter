import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './features/convert.scss';
import './features/control.scss';
import './features/option.scss';
import './features/interact.scss';
import {Convert} from './features/convert.js';

import {store} from './store/store.js';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Convert />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
