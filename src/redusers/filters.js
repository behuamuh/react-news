import { SET_FILTERS, DELETE_ARTICLE } from '../const';

export default (
  filters = {
    selectedOption: null,
    from: null,
    to: null,
  },
  action
) => {
  switch (action.type) {
    case SET_FILTERS:
      return { ...filters, ...action.payload.filters };
    case DELETE_ARTICLE: {
      return {
        ...filters,
        selectedOption: filters.selectedOption.filter(
          option => option.value !== action.payload.id
        ),
      };
    }
    default:
      return filters;
  }
};
