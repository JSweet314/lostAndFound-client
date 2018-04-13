import {call, put, takeLatest} from 'redux-saga/effects';
import {newItemSaga, listenForNewItem} from './newItemSaga';
import * as actions from '../actions';
import * as API from '../api';

describe('listenForNewItem', () => {
  let generator;
  beforeAll(() => {
    generator = listenForNewItem();
  });

  it('should take the latest REPORT_ITEM action', () => {
    const expected = takeLatest('REPORT_ITEM', newItemSaga);
    expect(generator.next().value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('newItemSaga', () => {
  let generator, mockAction, mockItem, mockLocation;
  beforeAll(() => {
    mockItem = {userId: 1, name: 'phone', location: 'Denver, CO'};
    mockAction = actions.reportItem(mockItem);
    mockLocation = {name: 'Denver, CO', lat: 34, lng: -109};
    generator = newItemSaga(mockAction);
  });

  it('should call geocoding API', () => {
    const expected = call(API.geoCode, mockAction.item.location);
    expect(generator.next().value).toEqual(expected);
  });

  it('should call an API to post the geocoded item location', () => {
    const expected = call(API.postLocation, mockLocation);
    expect(generator.next(mockLocation).value).toEqual(expected);
  });

  it('should call an API to post the remaining item data', () => {
    const newItem = {...mockItem, location: 1};
    const expected = call(API.postItem, newItem);
    expect(generator.next({id: 1}).value).toEqual(expected);
  });
  
  it('should reconcile store and DB items', () => {
    const expected = put(actions.fetchUserItems(mockItem.userId));
    expect(generator.next().value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should throw an error if appropriate', () => {
    const generator = newItemSaga(mockAction);
    const expected = put(actions.captureErrorMessage('error message'));
    generator.next();
    expect(generator.throw(new Error('error message')).value).toEqual(expected);
  });
});