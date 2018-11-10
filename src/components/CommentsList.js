import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

function CommentsList({ isOpen, toggleOpen, comments = [] }) {
  function getBody() {
    if (!isOpen) return null;
    if (comments.length < 1) return <h3>No comments here.</h3>;

    return (
      <ul>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    );
  }

  return (
    <div>
      <button onClick={toggleOpen}>
        {!isOpen ? 'Show ' : 'Hide '}comments{' '}
      </button>
      {getBody()}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default toggleOpen(CommentsList);
