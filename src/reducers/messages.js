import { USER_TYPE } from '../actiontypes';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */
export default function message( state = { message: '', type: 'SUCCESS'}, action = {}) {
  switch (action.type) {
    case USER_TYPE.LOGIN_SUCCESS_USER:
    case USER_TYPE.SIGNUP_SUCCESS_USER:
      return {
        ...state,
        message: action.message,
        type: 'SUCCESS'
      };
    case USER_TYPE.DISMISS_MESSAGE:
      return {
        ...state,
        message: '',
        type: 'SUCCESS'
      };
    default:
      return state;
  }
}
