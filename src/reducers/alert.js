import { ALERT_TYPE } from '../actiontypes';

export function alert(state = {}, action) {
  switch (action.type) {
    case ALERT_TYPE.SUCCESS:
      return {
        ...state,
        message: action.message,
        type: 'alert-success'
      };
    case ALERT_TYPE.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    // case types.DISMISS_MESSAGE:
    case ALERT_TYPE.CLEAR:
      return {
        ...state,
        message: '',
        type: 'SUCCESS'
      };
    default:
      return state;
  }
}
