import {createSelector} from 'reselect'

function getFilteredArticles(articles = [], filters) {
  const { selectedOption, from, to } = filters;
  return Object.keys(articles).filter(id => {
    return (
      (!from || new Date(articles[id].date).getTime() >= from.getTime()) &&
      (!to || new Date(articles[id].date).getTime() <= to.getTime()) &&
      (!selectedOption ||
        !selectedOption.length ||
        selectedOption.some(option => option.value === id))
    );
  });
}

export const getFilteredArticlesSelector = createSelector(
  state => state.articles,
  state => state.filters,
  getFilteredArticles
)

export const commentSelectorFactory = () => createSelector (
  state => state.comments,
  (state, props) => props.id,
  (comments, id) => {
    return comments[id];
  }
)

export const articleSelectorFactory = () => createSelector (
  state => state.articles,
  (state, props) => props.id,
  (articles, id) => {
    return articles[id];
  }
)