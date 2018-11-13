import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../redusers';
import { generateIDMiddleware } from '../components/middlewares';

const enhancer = applyMiddleware(generateIDMiddleware);

const store = createStore(rootReducer, enhancer);

export default store;
