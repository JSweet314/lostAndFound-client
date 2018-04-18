import { call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../api';
import * as actions from '../actions';
import * as helpers from '../helpers';

export function* newItemSaga(action) {
  try {
    if (!action.item.location.lat) {
      const response = yield call(API.geoCode, action.item.location.name);
      const geoLocation = yield helpers.geoCodeWrangler(response);
      const {name} = action.item.location;
      action.item.location = {name, ...geoLocation};
    }
    const locationPost = yield call(API.postLocation, action.item.location);
    const item = { ...action.item, location: locationPost.id };
    yield call(API.postItem, item);
    yield put(actions.fetchUserItems(item.userId));

  } catch (error) {
    yield put(actions.captureErrorMessage(error.message));
  }
}

export function* listenForNewItem() {
  yield takeLatest('REPORT_ITEM', newItemSaga);
}