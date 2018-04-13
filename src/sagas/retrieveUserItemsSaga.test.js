import { call, put, takeLatest } from 'redux-saga/effects';
import { retrieveUserItemsSaga, listenForRetrieveUserItems } 
  from './retrieveUserItemsSaga';
import * as API from '../api';
import * as actions from '../actions';

describe('listenForUserItem', () => {
  let generator;
  beforeAll(() => {
    generator = listenForRetrieveUserItems();
  });

  it('should take the latest "FETCH_USER_ITEMS" action', () => {
    const expected = takeLatest('FETCH_USER_ITEMS', retrieveUserItemsSaga);
    expect(generator.next().value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('retrieveUserItemsSaga', () => {
  let generator, mockAction, mockUserId;
  beforeAll(() => {
    mockUserId = 1;
    mockAction = actions.fetchUserItems(mockUserId);
    generator = retrieveUserItemsSaga(mockAction);
  });

  it('should call the API', () => {
    const expected = call(API.fetchUserItems, mockUserId);
    expect(generator.next().value).toEqual(expected);
  });

  it('should put storeUserItems on the stack', () => {
    const mockResponse = {items: []};
    const expected = put(actions.captureItems(mockResponse));
    expect(generator.next(mockResponse).value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should put captureErrorMessage on the stack if needed', () => {
    const generator = retrieveUserItemsSaga(mockAction);
    const expected = put(actions.captureErrorMessage('error message'));
    generator.next();
    expect(generator.throw(new Error('error message')).value).toEqual(expected);
  });
});