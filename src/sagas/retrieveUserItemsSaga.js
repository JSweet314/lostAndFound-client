import {put, call, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions';
import * as API from '../api';

export function* retrieveUserItemsSaga(action) {
  try {
    const response = yield call(API.fetchUserItems, action.userId);
    yield put(actions.captureItems(response));
  } catch (error) {
    yield put(actions.captureErrorMessage(error.message));
  }
}

export function* listenForRetrieveUserItems() {
  yield takeLatest('FETCH_USER_ITEMS', retrieveUserItemsSaga);
}
