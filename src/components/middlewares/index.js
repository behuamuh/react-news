import { ADD_COMMENT } from '../../const';

export const generateIDMiddleware = state => next => action => {
  if (action.type === ADD_COMMENT) {
    action.payload = {
      ...action.payload,
      id: Date.now() + Math.random().toString(),
    };
  }
  next(action);
};
