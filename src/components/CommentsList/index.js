import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import Comment from '../Comment';
import toggleOpen from '../../decorators/toggleOpen';
import CommentForm from '../CommentForm';
import './style.css'

function CommentsList({ isOpen, toggleOpen, comments = [] }) {
  function getBody() {
    if (!isOpen) return null;
    const list =
      comments.length < 1 ? (
        <h3>No comments here.</h3>
      ) : (
        <ul>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      );

    return (
      <div>
        {list}
        <CommentForm />
      </div>
    );
  }

  return (
    <div>
      <button onClick={toggleOpen}>
        {!isOpen ? 'Show ' : 'Hide '}comments{' '}
      </button>
      <CSSTransitionGroup
        transitionName="commentsList"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {getBody()}
      </CSSTransitionGroup>
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default toggleOpen(CommentsList);