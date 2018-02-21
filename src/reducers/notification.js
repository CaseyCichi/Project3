import { NOTIFICATION_TYPE } from '../actiontypes';

const initialState = {
  notifications: []
};

export function notification(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_TYPE.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.notification]
      };

    case NOTIFICATION_TYPE.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications.slice(0, action.index),
          ...state.notifications.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}
