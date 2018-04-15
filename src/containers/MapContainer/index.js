import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapComponent from '../../components/MapComponent';
import { googleUrl } from '../../private/keys';
import * as actions from '../../actions';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.userLocation !== this.props.userLocation) {
      this.setState({ loading: false });
    }
  }

  onMarkerClick = event => {
    console.log(event);
  }

  onMapClick = event => {
    const location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    this.props.captureGeo(location);
    this.props.captureMarkerCoords(location);
    this.setState({ loading: false });
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
        loading={this.state.loading}
        position={this.props.userLocation}
        onMapClick={this.onMapClick}
        onMarkerClick={this.onMarkerClick}
        googleMapURL={googleUrl}
        loadingElement={this.loadingElement()}
        containerElement={this.containerElement()}
        mapElement={this.mapElement()} />
    );
  }
}

export const mapStateToProps = state => ({
  userLocation: state.userLocation
});

export const mapDispatchToProps = dispatch => ({
  captureGeo: location => dispatch(actions.captureGeo(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);