import { normalizedComments as defaultComments } from '../fixtures';
import { ADD_COMMENT } from '../const';

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment;
  return acc;
}, {});

export default function(comments = commentsMap, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...comments, [action.payload.id]: { ...action.payload } };
    default:
      return comments;
  }
}
