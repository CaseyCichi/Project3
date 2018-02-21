import { ALERT_TYPE } from '../actiontypes';

function success(message) {
  return { type: ALERT_TYPE.REQUEST_SUCCESS, message };
}

function error(message) {
  return { type: ALERT_TYPE.ERROR, message };
}

function clear() {
  return { type: ALERT_TYPE.DISMISS_MESSAGE };
}

export default {
  success,
  error,
  clear
};


