import React from 'react';

import './comments.css';

const Comment = props => (
  <li className={'comment ' + (props.type || 'primary')}>
    {props.text}
    <button className="close" onClick={() => props.removeFunc(props.id)}>
      &times;
    </button>
  </li>
);

const Comments = props =>
  props.comments.length > 0 ? (
    <ul id="comments">
      {props.comments.map(comment => {
        return (
          <Comment
            key={'comment-' + comment.id}
            removeFunc={props.removeFunc}
            {...comment}
          />
        );
      })}
    </ul>
  ) : null;

export default Comments;