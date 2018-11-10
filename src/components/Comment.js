import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  return (
    <li>
      <p>
        {comment.text} <b>by {comment.user}</b>
      </p>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
