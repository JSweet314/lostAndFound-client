import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorMessageReducer from './errorMessageReducer';

const rootReducer = combineReducers({
  user: userReducer,
  errorMessage: errorMessageReducer
});

export default rootReducer;