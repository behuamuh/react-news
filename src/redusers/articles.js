import { normalizedArticles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE, ADD_COMMENT } from '../const';

const articlesMap = defaultArticles.reduce((acc, article) => {
  acc[article.id] = article;
  return acc;
}, {});

export default function(articles = articlesMap, action) {
  switch (action.type) {
    case DELETE_ARTICLE:
      return articles.filter(article => article.id !== action.payload.id);
    case ADD_COMMENT:
      const { articleID, id } = action.payload;
      const newArticles = {...articles};
      newArticles[articleID] = {...articles[articleID],
          comments: [...articles[articleID].comments, id],
        }
      return newArticles;
    default:
      return articles;
  }
}
