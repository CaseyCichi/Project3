import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createRoutes from './routes';
import { REQ_TYPE } from './actiontypes';
import fetchDataForRoute from './utils/fetchData';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import initStore from '../src/utils/initStore';
import registerServiceWorker from './registerServiceWorker';

const initialState = window.__INITIAL_STATE__;
const store = initStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

function onUpdate() {
  if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
    return;
  }
  store.dispatch({ type: REQ_TYPE.CREATE_REQUEST });
  fetchDataForRoute(this.state)
    .then((data) => {
      return store.dispatch({ type: REQ_TYPE.REQUEST_SUCCESS, data });
    });
}

render(
  <Provider store={store}>
    <Router history={history} onUpdate={onUpdate}>
      {routes}
    </Router>
  </Provider>, document.getElementById('app-content'));

registerServiceWorker();

