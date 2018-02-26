import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import combineReducers from './reducers';

export const store = createStore(
    combineReducers,
    applyMiddleware(
      reduxThunk
    )
);