import {all} from 'redux-saga/effects';
import {listenForAddNewUser} from './addNewUserSaga';
import {listenForSignInUser} from './signInUserSaga';

export default function* rootSaga() {
  yield all([
    listenForAddNewUser(),
    listenForSignInUser()
  ]);
}