import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Article from './Article';
import accordeon from '../decorators/accordeon';
import { getFilteredArticlesSelector } from '../selectors';

function ArticleList({ articles, openedId, toggleOpen }) {
  const list = articles.map(id => (
    <Article
      key={id}
      id={id}
      isOpen={id === openedId}
      toggleOpen={toggleOpen(id)}
    />
  ));
  return <ul>{list}</ul>;
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  openedId: PropTypes.any,
  toggleOpen: PropTypes.func.isRequired,
};

export default connect(state => ({
  articles: getFilteredArticlesSelector(state),
}))(accordeon(ArticleList));
