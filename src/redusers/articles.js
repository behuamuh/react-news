import { normalizedArticles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE, ADD_COMMENT } from '../const';

const articlesMap = defaultArticles.reduce((acc, article) => {
  acc[article.id] = article;
  return acc;
}, {});

export default function(articles = articlesMap, action) {
  switch (action.type) {
    case DELETE_ARTICLE:
      return Object.keys(articles).reduce((acc, id) => {
        if (id !== action.payload.id) {
          return { ...acc, [id]: articles[id] };
        }
        return acc;
      }, {});
    case ADD_COMMENT:
      const { articleID, id } = action.payload;
      const newArticles = { ...articles };
      newArticles[articleID] = {
        ...articles[articleID],
        comments: [...articles[articleID].comments, id],
      };
      return newArticles;
    default:
      return articles;
  }
}
