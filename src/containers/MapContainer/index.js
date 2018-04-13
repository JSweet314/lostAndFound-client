import React, { Component } from 'react';
import MapComponent from '../../components/MapComponent';
import { googleUrl } from '../../private/keys';

export class MapContainer extends Component {
  constructor() {
    super();
  }
  containerElement = () => (
    <div 
      className="lostAndFoundMap"
      style={{
        position: 'absolute',
        right: '2rem',
        top: '170px',
        height: '50%', 
        width: '50%'
      }} 
    />
  )
  loadingElement = () => (<div style={{ height: `100%` }} />)
  mapElement = () => (<div style={{ height: `100%` }} />)
  render() {
    return (
      <MapComponent
        googleMapURL={googleUrl}
        loadingElement={this.loadingElement()}
        containerElement={this.containerElement()}
        mapElement={this.mapElement()} />
    );
  }
}