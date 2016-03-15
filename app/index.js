//node modules imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import reduxPromise from 'redux-promise'; //will unwrap all payload that are promises
import reduxThunk from 'redux-thunk'; //for asyn actions, will continue to call functions(thunk)
import createLogger from 'redux-logger'; //logs actions

//file imports
import reducers from './reducers/RootReducer';
import routes from './routes'

const reduxLogger = createLogger();

const createStoreWithMiddleware = applyMiddleware(reduxPromise, reduxThunk, reduxLogger)(createStore);

//<Provider store> makes redux store available to the connect calls in the component heirarchy
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  ,document.getElementById("container")
);
