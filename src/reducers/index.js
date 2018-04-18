import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorMessageReducer from './errorMessageReducer';
import itemsReducer from './itemsReducer.js';
import mapMarkerReducer from './mapMarkersReducer.js';
import geoLocationReducer from './geoLocationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  errorMessage: errorMessageReducer,
  items: itemsReducer,
  mapMarker: mapMarkerReducer,
  userLocation: geoLocationReducer
});

export default rootReducer;