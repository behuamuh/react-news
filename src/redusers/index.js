import { combineReducers } from 'redux';
import count from './count';
import articles from './articles';
import filters from './filters';
import comments from './comments';

export default combineReducers({
  count,
  articles,
  filters,
  comments,
});
