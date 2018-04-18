import mapMarkerReducer from './mapMarkersReducer';
import * as actions from '../actions';

describe('mapMarkerReducer', () => {
  it('should return a default state', () => {
    expect(mapMarkerReducer(undefined, {})).toEqual({});
  });

  it('should handle action CAPTURE_MARKER', () => {
    const mockMarker = { lat: 1, lng: 2 };
    expect(mapMarkerReducer(undefined, actions.captureMarker(mockMarker)))
      .toEqual(mockMarker);
  });
});