import { combineReducers } from 'redux';
import count from './count';
import articles from './articles';
import filters from './filters';

export default combineReducers({
  count,
  articles,
  filters,
});
