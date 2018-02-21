import { COMMENT_TYPE } from '../actiontypes';

export function addComment(comment) {
  comment.id = guid();
  return dispatch => {
    dispatch({
      type: COMMENT_TYPE.CREATE_COMMENT_REQUEST,
      comment
    });
  };
}

export function removeComment(id) {
  return (dispatch, getState) => {
    getState().comment.comments.forEach((item, index) => {
      if (item.id === id) {
        dispatch({
          type: COMMENT_TYPE.CREATE_COMMENT_REQUEST,
          index: index
        });
      }
    });
  };
}

const guid = () => {
  return 'xxxxxxxx-xxxx-8xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default {
  addComment,
  removeComment
};
