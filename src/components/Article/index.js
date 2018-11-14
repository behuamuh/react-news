import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import CommentsList from '../CommentsList';
import { deleteArticle } from '../../actions';
import { articleSelectorFactory } from '../../selectors';
import './style.css';

function Article({ article, isOpen, toggleOpen, deleteArticle, id }) {
  function getBody() {
    return isOpen ? (
      <div>
        <section>{article.text}</section>
        <CommentsList comments={article.comments} articleID={id} />
      </div>
    ) : null;
  }

  function handleDelete() {
    deleteArticle(id);
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
      <button onClick={handleDelete}>Delete</button>
      <CSSTransitionGroup
        transitionName="article"
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

Article.propTypes = {
  id: PropTypes.any.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array,
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  deleteArticle: PropTypes.func,
};

const mapStateToProps = () => {
  const articleSelector = articleSelectorFactory();
  return (state, ownProps) => {
    return { article: articleSelector(state, ownProps) };
  };
};

export default connect(
  mapStateToProps,
  { deleteArticle }
)(Article);
