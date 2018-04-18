import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer } from './index';
import * as API from '../../api';

jest.mock('../../api');

describe('MapContainer', () => {
  let wrapper;
  const mockCaptureGeo = jest.fn();
  const mockHandleMapClick = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <MapContainer 
        captureGeo={mockCaptureGeo}
        loading={false}
        markerCoords={{}}
        routeId='map'
        handleMapClick={mockHandleMapClick}
        top=''
        right=''
        height=''
        width=''
      />
    );
  });
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able reverseGeoCode location info from a map', () => {
    wrapper.instance().reverseGeoCode({lat: 1, lng: 2});
    expect(API.reverseGeoCode).toHaveBeenCalledWith({lat: 1, lng: 2});
  });

  it('should call handleMapClick after reverseGeoCoding', async () => {
    wrapper.instance().reverseGeoCode({ lat: 1, lng: 2 });
    expect(mockHandleMapClick).toHaveBeenCalledWith({
      name: 'Turing', 
      lat: 1, 
      lng: 2
    });
  });

  it('should have a onMapClick method which calls reverseGeoCode', () => {
    const mockEvent = {
      latLng: {
        lat: jest.fn(() => 1),
        lng: jest.fn(() => 2)
      }
    };
    const mockReverseGeoCode = jest.fn();
    wrapper.instance().reverseGeoCode = mockReverseGeoCode;
    wrapper.instance().onMapClick(mockEvent);
    expect(mockReverseGeoCode).toHaveBeenCalledWith({lat: 1, lng: 2});
  });

  it('onMapClick should set the state with markerCoords', () => {
    const mockEvent = {
      latLng: {
        lat: jest.fn(() => 1),
        lng: jest.fn(() => 2)
      }
    };
    const mockReverseGeoCode = jest.fn();
    wrapper.instance().reverseGeoCode = mockReverseGeoCode;
    wrapper.instance().onMapClick(mockEvent);
    expect(wrapper.state('markerCoords')).toEqual({lat: 1, lng: 2});
  });
});