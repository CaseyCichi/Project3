import { COMMENT_TYPE } from '../actiontypes';

const initialState = {
  comments: []
};

export function comment(state = initialState, action) {
  switch (action.type) {
    case COMMENT_TYPE.CREATE_COMMENT_REQUEST:
      return {
        ...state,
        comments: [...state.comments, action.comments]
      };

    case COMMENT_TYPE.DESTROY_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, action.index),
          ...state.comments.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}
