import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home'
import store from './store/store_file'
import {Provider} from 'react-redux'

// Connected View To The Store
ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('root')
);
