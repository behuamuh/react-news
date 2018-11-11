import { SET_FILTERS } from '../const';

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
    default:
      return filters;
  }
};
