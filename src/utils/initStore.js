import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initStore = (initialState, history) => {
  const enhancers = [];
  const middleware = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development' && typeof devToolsExtension === 'function') {
    enhancers.push(window.devToolsExtension());
  }
  
  const composedEnhancers =
    enhancers.length > 0
      ? compose(applyMiddleware(...middleware), ...enhancers)
      : compose(applyMiddleware(...middleware));

  return createStore(rootReducer, initialState, composedEnhancers);
};

export default initStore;
