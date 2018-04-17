import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as API from '../api';

export function* getLocationDetailsSaga(action) {
  try {
    const response = yield call(API.fetchLocationDetails, action.locationId);
    console.log(response);
    yield put(actions.captureLocation({
      itemId: action.itemId, location: response
    }));
    const {lat, lng} = response;
    yield put(actions.captureMarker({lat, lng}));
  } catch (error) {
    yield put(actions.captureErrorMessage(error.message));
  }
}

export function* listenForGetLocationDetails() {
  yield takeLatest('FETCH_LOCATION', getLocationDetailsSaga);
}