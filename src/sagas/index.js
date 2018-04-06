import {call, put, takeLatest} from 'redux-saga/effects';
import * as API from '../api';
import * as actions from '../actions';

export function* addUserSaga(action) {
  try {
    const user = yield call(API.addUser, action.user);
    yield put(actions.captureUser({
      username: action.user.username, 
      email: action.user.email,
      id: user.id
    }));
  } catch (error) {
    yield put(actions.captureErrorMessage(error.message));
  }
}

export function* listenForSubmitNewUser() {
  yield takeLatest('SUBMIT_NEW_USER', addUserSaga);
}