import { combineReducers } from 'redux';

// import { authentication } from './authentication';
import { registration } from './registration';
import userReducer from './user';
import { alert } from './alert';
import { notification } from './notification';
import { comment } from './comment';

const rootReducer = combineReducers({
  // authentication,
  registration,
  userReducer,
  alert,
  notification,
  comment
});

export default rootReducer;
