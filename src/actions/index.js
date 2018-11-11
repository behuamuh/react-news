import { INCREMENT, DELETE_ARTICLE, SET_FILTERS } from '../const';

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
