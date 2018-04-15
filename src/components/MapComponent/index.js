import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } 
  from 'react-google-maps';
import './style.css';

export const MapComponent = withScriptjs(withGoogleMap((
  {position, onMapClick, onMarkerClick, ...props}
) => {
  return (props.loading ? 
    <div className='map-loading'>
      <h3>Waiting on Location...</h3>
    </div> 
    : <GoogleMap
      onClick={event => onMapClick(event)}
      defaultZoom={16}
      center={position}>  
      <Marker onClick={event => onMarkerClick(event)} position={position}/>
    </GoogleMap>
  );
}));

export default MapComponent;