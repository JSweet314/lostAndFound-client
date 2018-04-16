import geoLocationReducer from './geoLocationReducer';
import * as actions from '../actions';

describe('geoLocationReducer', () => {
  it('should return a default position', () => {
    const expected = { lat: 39.7508, lng: -104.9966, loading: true };
    expect(geoLocationReducer(undefined, {})).toEqual(expected);
  });

  it('should be able to get a new position', () => {
    const mockPosition = {lat: 1, lng: 2};
    expect(geoLocationReducer(undefined, actions.captureGeo(mockPosition)))
      .toEqual({position: mockPosition, loading: false});
  });
});