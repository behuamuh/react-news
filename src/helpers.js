export function getFilteredArticles(articles = [], filters) {
  const { selectedOption, from, to } = filters;
  return articles.filter(article => {
    return (
      (!from || new Date(article.date).getTime() >= from.getTime()) &&
      (!to || new Date(article.date).getTime() <= to.getTime()) &&
      (!selectedOption ||
        !selectedOption.length ||
        selectedOption.some(option => option.value === article.id))
    );
  });
}
