import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorMessageReducer from './errorMessageReducer';
import itemsReducer from './itemReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  errorMessage: errorMessageReducer,
  items: itemsReducer
});

export default rootReducer;