import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

export const MapComponent = withScriptjs(withGoogleMap(() => {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 39.7508, lng: -104.9966 }}>  
    </GoogleMap>
  );
}));

export default MapComponent;