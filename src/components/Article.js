import React from 'react';
import PropTypes from 'prop-types';

import CommentsList from './CommentsList';

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
      {getBody()}
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array,
  })
}

export default Article;
