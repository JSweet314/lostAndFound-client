import { call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../api';
import * as actions from '../actions';

export function* signInUserSaga(action) {
  try {
    const user = yield call(API.signInUser, action.user);
    yield put(actions.captureUser({
      username: user.username,
      email: action.user.email,
      id: user.id
    }));
    yield put(actions.clearErrorMessage());
  } catch (error) {
    yield put(actions.captureErrorMessage(error.message));
  }
}

export function* listenForSignInUser() {
  yield takeLatest('SIGN_IN_USER', signInUserSaga);
}