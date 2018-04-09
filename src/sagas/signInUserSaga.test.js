import { call, put, takeLatest } from 'redux-saga/effects';
import { signInUserSaga, listenForSignInUser } from './signInUserSaga';
import shajs from 'sha.js';
import * as API from '../api';
import * as actions from '../actions';

describe('listenForSignInUser', () => {
  let generator;
  beforeAll(() => {
    generator = listenForSignInUser();
  });

  it('should take the latest SIGN_IN_USER action', () => {
    expect(generator.next().value)
      .toEqual(takeLatest('SIGN_IN_USER', signInUserSaga));
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('signInUserSaga', () => {
  let generator, user, mockAction, hashedPassword;

  beforeAll(() => {
    user = {
      email: 'will@gmail.com',
      password: 'abc'
    };
    hashedPassword = new shajs.sha256().update(user.password).digest('hex');
    mockAction = actions.signInUser(user);
    generator = signInUserSaga(mockAction);
  });

  it('should call the API', () => {
    const expected = call(API.signInUser, {...user, password: hashedPassword});
    expect(generator.next().value).toEqual(expected);
  });

  it('should put captureUser on the stack', () => {
    const prevValue = {
      username: 'will',
      id: 1
    };
    const expected = put(actions.captureUser({
      username: 'will',
      email: 'will@gmail.com',
      id: 1
    }));
    expect(generator.next(prevValue).value).toEqual(expected);
  });

  it('should put clearErrorMessage on the stack', () => {
    const expected = put(actions.clearErrorMessage());
    expect(generator.next().value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should throw an error if appropriate', () => {
    const generator = signInUserSaga(mockAction);
    const expected = put(actions.captureErrorMessage('an error occured'));
    
    generator.next();
    expect(generator.throw(new Error('an error occured')).value)
      .toEqual(expected);
  });
});