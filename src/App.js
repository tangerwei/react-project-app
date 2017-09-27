import React, { Component } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
//import reducers from './reducers';

//
import AppRouter from './router';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(combineReducers({
  //...reducers,
  router: routerReducer
}),
applyMiddleware(middleware)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
