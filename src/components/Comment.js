import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentSelectorFactory } from '../selectors';

const Comment = props => {
  const { comment } = props;
  return (
    <li>
      <p>
        {comment.text} <b>by {comment.user}</b>
      </p>
    </li>
  );
};

Comment.propTypes = {
  id: PropTypes.any.isRequired,
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();
  return (state, ownProps) => {
    return { comment: commentSelector(state, ownProps) };
  };
};

export default connect(mapStateToProps)(Comment);
