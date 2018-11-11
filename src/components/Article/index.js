import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import CommentsList from '../CommentsList';
import './style.css';

function Article({ article, isOpen, toggleOpen }) {
  function getBody() {
    return isOpen ? (
      <div>
        <section>{article.text}</section>
        <CommentsList comments={article.comments} />
      </div>
    ) : null;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
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
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array,
  }),
};

export default Article;
