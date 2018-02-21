import { NOTIFICATION_TYPE } from '../actiontypes';

export function addNotification(notification) {
  notification.id = guid();
  return dispatch => {
    dispatch({
      type: NOTIFICATION_TYPE.ADD_NOTIFICATION,
      notification
    });
  };
}

export function removeNotification(id) {
  return (dispatch, getState) => {
    getState().notification.notifications.forEach((item, index) => {
      if (item.id === id) {
        dispatch({
          type: NOTIFICATION_TYPE.REMOVE_NOTIFICATION,
          index: index
        });
      }
    });
  };
}

const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default {
  addNotification,
  removeNotification
};
