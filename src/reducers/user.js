import { combineReducers } from 'redux';
import { USER_TYPE } from '../actiontypes';

const isLogin = (state = true, action) => {
  switch (action.type) {
    case USER_TYPE.TOGGLE_LOGIN_MODE:
      return !state;
    default:
      return state;
  }
};

const message = (state = '', action) => {
  switch (action.type) {
    case USER_TYPE.TOGGLE_LOGIN_MODE:
    case USER_TYPE.MANUAL_LOGIN_USER:
    case USER_TYPE.SIGNUP_USER:
    case USER_TYPE.LOGOUT_USER:
    case USER_TYPE.LOGIN_SUCCESS_USER:
    case USER_TYPE.SIGNUP_SUCCESS_USER:
      return '';
    case USER_TYPE.LOGIN_ERROR_USER:
    case USER_TYPE.SIGNUP_ERROR_USER:
      return action.message;
    default:
      return state;
  }
};

const isWaiting = (state = false, action) => {
  switch (action.type) {
    case USER_TYPE.MANUAL_LOGIN_USER:
    case USER_TYPE.SIGNUP_USER:
    case USER_TYPE.LOGOUT_USER:
      return true;
    case USER_TYPE.LOGIN_SUCCESS_USER:
    case USER_TYPE.SIGNUP_SUCCESS_USER:
    case USER_TYPE.LOGOUT_SUCCESS_USER:
    case USER_TYPE.LOGIN_ERROR_USER:
    case USER_TYPE.SIGNUP_ERROR_USER:
    case USER_TYPE.LOGOUT_ERROR_USER:
      return false;
    default:
      return state;
  }
};

const authenticated = (state = false, action) => {
  switch (action.type) {
    case USER_TYPE.LOGIN_SUCCESS_USER:
    case USER_TYPE.SIGNUP_SUCCESS_USER:
    case USER_TYPE.LOGOUT_ERROR_USER:
      return true;
    case USER_TYPE.LOGIN_ERROR_USER:
    case USER_TYPE.SIGNUP_ERROR_USER:
    case USER_TYPE.LOGOUT_SUCCESS_USER:
      return false;
    default:
      return state;
  }
};

const userReducer = combineReducers({
  isLogin,
  isWaiting,
  authenticated,
  message
});

export default userReducer;
