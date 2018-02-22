import { REQ_TYPE } from '../actiontypes';

export function dismissMessage() {
  return { type: REQ_TYPE.DISMISS_MESSAGE };
}

export default {
  dismissMessage
};
