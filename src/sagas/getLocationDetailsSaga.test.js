import { call, put, takeLatest } from 'redux-saga/effects';
import { getLocationDetailsSaga, listenForGetLocationDetails }
  from './getLocationDetailsSaga';
import * as API from '../api';
import * as actions from '../actions';

describe('listenForGetLocationDetails', () => {
  let generator;
  beforeAll(() => {
    generator = listenForGetLocationDetails();
  });

  it('should take the latest FETCH_LOCATION', () => {
    const expected = takeLatest('FETCH_LOCATION', getLocationDetailsSaga);
    expect(generator.next().value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('getLocationDetailsSaga', () => {
  let generator;
  const mockIds = {itemId: 1, locationId: 2};
  const mockAction = actions.fetchItemLocation(mockIds);
  beforeAll(() => {
    generator = getLocationDetailsSaga(mockAction);
  });

  it('should call the API with correct params', () => {
    const expected = call(API.fetchLocationDetails, mockAction.locationId);
    expect(generator.next().value).toEqual(expected);
  });

  it('should put action creator captureLocation on the stack', () => {
    const expected = put(actions.captureLocation({
      itemId: mockAction.itemId, 
      location: { name: 'turing', lat: 1, lng: 2 }
    }));
    expect(generator.next({ name: 'turing', lat: 1, lng: 2 }).value)
      .toEqual(expected);
  });

  it('should put action creator captureMarker on the stack', () => {
    const expected = put(actions.captureMarker({ lat: 1, lng: 2 }));
    expect(generator.next().value).toEqual(expected);
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should throw an error if appropriate', () => {
    const generator = getLocationDetailsSaga(mockAction);
    const expected = put(actions.captureErrorMessage('error'));
    generator.next();
    expect(generator.throw(new Error('error')).value).toEqual(expected);
  });
});