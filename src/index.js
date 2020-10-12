import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import './style/convert.scss';
import './style/control.scss';
import './style/option.scss';
import './style/interact.scss';
import Convert from './components/convert.js';

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
