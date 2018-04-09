import { call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../api';
import * as actions from '../actions';
import shajs from 'sha.js';

export function* addNewUserSaga(action) {
  try {
    const hashedPassword = new shajs.sha256()
      .update(action.user.password).digest('hex');
    const newUser = { ...action.user, password: hashedPassword };
    const user = yield call(API.addUser, newUser);
    yield put(actions.captureUser({
      username: action.user.username,
      email: action.user.email,
      id: user.id
    }));
    yield put(actions.clearErrorMessage());
  } catch (error) {
    yield put(actions.captureErrorMessage(error.message));
  }
}

export function* listenForAddNewUser() {
  yield takeLatest('SUBMIT_NEW_USER', addNewUserSaga);
}