import {call, put, takeLatest} from 'redux-saga/effects';
import {addNewUserSaga, listenForAddNewUser} from './addNewUserSaga';
import * as API from '../api';
import * as actions from '../actions';

describe('listenForAddNewUser', () => {
  let generator;
  beforeAll(() => {
    generator = listenForAddNewUser();
  });

  it('should take the latest SUBMIT_USER_LOGIN action', () => {
    expect(generator.next().value)
      .toEqual(takeLatest('SUBMIT_NEW_USER', addNewUserSaga));
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('addNewUserSaga', () => {
  let generator, user, mockAction;

  beforeAll(() => {
    user = {
      username: 'will',
      email: 'will@gmail.com',
      password: 'abc'
    };
    mockAction = actions.submitNewUser(user);
    generator = addNewUserSaga(mockAction);
  });

  it('should call the API', () => {
    const expected = call(API.addUser, user);
    expect(generator.next().value).toEqual(expected);
  });

  it('should put the captureUser action on the stack', () => {
    const userId = {id: 1};
    const user = {
      username: 'will',
      email: 'will@gmail.com',
      id: 1
    };
    const expected = put(actions.captureUser(user));
    expect(generator.next(userId).value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should throw an error if appropriate', () => {
    const generator = addNewUserSaga(mockAction);
    const expected = put(actions.captureErrorMessage('an error occured'));

    generator.next();
    expect(generator.throw(new Error('an error occured')).value)
      .toEqual(expected);
  });
});