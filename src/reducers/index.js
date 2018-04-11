import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorMessageReducer from './errorMessageReducer';
import itemsReducer from './itemsReducer.js';
import mapMarkersReducer from './mapMarkersReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  errorMessage: errorMessageReducer,
  items: itemsReducer,
  mapMarkers: mapMarkersReducer
});

export default rootReducer;