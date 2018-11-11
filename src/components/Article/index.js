import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux'

import CommentsList from '../CommentsList';
import {deleteArticle} from '../../actions'
import './style.css';

function Article({ article, isOpen, toggleOpen, deleteArticle }) {
  function getBody() {
    return isOpen ? (
      <div>
        <section>{article.text}</section>
        <CommentsList comments={article.comments} />
      </div>
    ) : null;
  }

  function handleDelete(){
    console.log('delete')
    deleteArticle(article.id)
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
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array,
  }),
};

export default connect(null,{deleteArticle})(Article);
