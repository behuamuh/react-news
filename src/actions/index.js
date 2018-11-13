import { INCREMENT, DELETE_ARTICLE, SET_FILTERS, ADD_COMMENT } from '../const';

export function increment(value) {
  return {
    type: INCREMENT,
    payload: { value },
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id },
  };
}

export function setFilters(filters) {
  return {
    type: SET_FILTERS,
    payload: filters,
  };
}

export function addComment(user, text, articleID) {
  return {
    type: ADD_COMMENT,
    payload: {
      user,
      text,
      articleID,
    },
  };
}
