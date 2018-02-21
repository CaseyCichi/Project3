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

// const message = (state = '', action) => {
//   switch (action.type) {
//     case USER_TYPE.SIGNUP_USER:
//     case USER_TYPE.SIGNUP_SUCCESS_USER:
//       return '';
//     case USER_TYPE.SIGNUP_ERROR_USER:
//       return action.message;
//     default:
//       return state;
//   }
// };

// const isWaiting = (state = false, action) => {
//   switch (action.type) {
//     case USER_TYPE.SIGNUP_USER:
//       return true;
//     case USER_TYPE.SIGNUP_SUCCESS_USER:
//     case USER_TYPE.SIGNUP_ERROR_USER:
//       return false;
//     default:
//       return state;
//   }
// };

// const authenticated = (state = false, action) => {
//   switch (action.type) {
//     case USER_TYPE.SIGNUP_SUCCESS_USER:
//       return true;
//     case USER_TYPE.SIGNUP_ERROR_USER:
//       return false;
//     default:
//       return state;
//   }
// };
