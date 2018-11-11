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
      return action.filters;
    default:
      return filters;
  }
};
