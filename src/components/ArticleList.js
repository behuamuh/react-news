import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import accordeon from '../decorators/accordeon';

function ArticleList({ articles, openedId, toggleOpen }) {
  const list = articles.map(article => (
    <Article
      key={article.id}
      article={article}
      isOpen={article.id === openedId}
      toggleOpen={toggleOpen(article.id)}
    />
  ));
  return <ul>{list}</ul>;
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  openedId: PropTypes.any,
  toggleOpen: PropTypes.func.isRequired,
}

export default accordeon(ArticleList);