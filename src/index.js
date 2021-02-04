import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { routerMiddleware, routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from './history/history'
import App from './App';
import './index.css';
import configureStore from './infrastructure/signalRMiddleware';
import * as reducers from './Reducers';

const baseHistory = createHistory;
const routingMiddleware = routerMiddleware(baseHistory)
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}));

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunkMiddleware, routingMiddleware),
);

// Note: passing enhancer as the last argument requires redux@>=3.1.0
//const store = createStore(reducer, enhancer)

//do not delete
const store = configureStore(reducer, enhancer);

const history = syncHistoryWithStore(baseHistory, store)

//Define Routes
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <App/>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)