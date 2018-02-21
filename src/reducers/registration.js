import { USER_TYPE } from '../actiontypes';

export function registration(state = {}, action) {
  switch (action.type) {
    case USER_TYPE.REGISTER_REQUEST:
      return { registering: true };
    case USER_TYPE.REGISTER_SUCCESS:
      return {};
    case USER_TYPE.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}