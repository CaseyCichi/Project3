import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { REQ_TYPE } from '../actiontypes';
import messages from './messages';
import user from './user';
import { notification } from './notification';
import { comment } from './comment';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQ_TYPE.CREATE_REQUEST:
      return true;
    case REQ_TYPE.REQUEST_SUCCESS:
    case REQ_TYPE.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isFetching,
  user,
  notification,
  comment,
  messages,
  routing
});

export default rootReducer;