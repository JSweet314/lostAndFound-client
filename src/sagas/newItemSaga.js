import { call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../api';
import * as actions from '../actions';

export function* newItemSaga(action) {
  try {
    if (!action.item.reward) {
      action.item.reward = 0;
    }
    const geoCode = yield call(API.geoCode, action.item.location);
    const location = { name: action.item.location, ...geoCode };
    const locationPost = yield call(API.postLocation, location);
    const item = {...action.item, location: locationPost.id};
    yield call(API.postItem, item);
    yield put(actions.fetchUserItems(item.userId));   
  } catch (error) {
    throw new Error(error.message);
  }
}

export function* listenForNewItem() {
  yield takeLatest('REPORT_ITEM', newItemSaga);
}