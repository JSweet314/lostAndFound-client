import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorMessageReducer from './errorMessageReducer';
import itemsReducer from './itemsReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  errorMessage: errorMessageReducer,
  items: itemsReducer
});

export default rootReducer;