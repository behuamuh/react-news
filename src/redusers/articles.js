import { articles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE } from '../const';

export default function(articles = defaultArticles, action) {
  switch (action.type) {
    case DELETE_ARTICLE:
      return articles.filter(article => article.id !== action.payload.id);
    default:
      return articles;
  }
}
