import { call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../api';
import * as actions from '../actions';
import shajs from 'sha.js';

export function* signInUserSaga(action) {
  try {
    const hashedPassword = new shajs.sha256()
      .update(action.user.password).digest('hex');
    const returningUser = { ...action.user, password: hashedPassword };
    const user = yield call(API.signInUser, returningUser);
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