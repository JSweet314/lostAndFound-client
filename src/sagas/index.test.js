import {call, put, takeLatest} from 'redux-saga/effects';
import {addUserSaga, listenForSubmitNewUser} from './index';
import * as API from '../api';
import * as actions from '../actions';

describe('Sagas', () => {
  describe('listenForSubmitNewUser', () => {
    let generator;
    beforeAll(() => {
      generator = listenForSubmitNewUser();
    });

    it('should take the latest SUBMIT_USER_LOGIN action', () => {
      expect(generator.next().value)
        .toEqual(takeLatest('SUBMIT_NEW_USER', addUserSaga));
    });

    it('should be done', () => {
      expect(generator.next().done).toBe(true);
    });
  });

  describe('addUserSaga', () => {
    let generator, user, mockAction;

    beforeAll(() => {
      user = {
        username: 'will',
        email: 'will@gmail.com',
        password: 'abc'
      };
      mockAction = {
        type: 'SUBMIT_NEW_USER',
        user
      };
      generator = addUserSaga(mockAction);
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

    describe('on error', () => {
      const user = {
        username: 'will',
        email: 'will@gmail.com',
        password: 'abc'
      };

      const mockAction = {
        type: 'SUBMIT_NEW_USER',
        user
      };

      const generator = addUserSaga(mockAction);
      const expected = put(actions.captureErrorMessage('an error occured'));

      generator.next()
      expect(generator.throw(new Error('an error occured')).value)
        .toEqual(expected);
    });
  });
});