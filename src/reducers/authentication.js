import { USER_TYPE } from '../actiontypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case USER_TYPE.LOGIN_SUCCESS:
    case USER_TYPE.LOGIN_REQUEST:
      return { loggingIn: true, user: action.user };
    case USER_TYPE.LOGIN_FAILURE:
    case USER_TYPE.LOGOUT:
      return {};
    default:
      return state;
  }
}