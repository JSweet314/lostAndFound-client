import { all } from 'redux-saga/effects';
import { listenForAddNewUser } from './addNewUserSaga';
import { listenForSignInUser } from './signInUserSaga';
import { listenForNewItem } from './newItemSaga';

export default function* rootSaga() {
  yield all([
    listenForAddNewUser(),
    listenForSignInUser(),
    listenForNewItem()
  ]);
}