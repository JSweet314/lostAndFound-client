import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapComponent from '../../components/MapComponent';
import { googleUrl } from '../../private/keys';
import * as actions from '../../actions';
import PropTypes from 'prop-types';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerCoords: {}
    };
  }

  onMarkerClick = event => {
    console.log(event);
  }

  onMapClick = event => {
    const location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    this.props.captureMarkerCoords(location);
    this.setState({ markerCoords: location });
  }

  containerElement = () => (
    <div
      className="lostAndFoundMap"
      style={{
        position: 'absolute',
        top: this.props.top || '100px',
        left: this.props.right,
        height: this.props.height || '50%',
        width: this.props.width || '50%'
      }}
    />
  )
  loadingElement = () => (<div style={{ height: `100%` }} />)
  mapElement = () => (<div style={{ height: `100%` }} />)
  render() {
    return (
      <MapComponent
        {...this.state}
        loading={this.props.loading}
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
  userLocation: state.userLocation.position,
  loading: state.userLocation.loading
});

export const mapDispatchToProps = dispatch => ({
  captureGeo: location => dispatch(actions.captureGeo(location))
});

MapContainer.propTypes = {
  userLocation: PropTypes.object,
  captureGeo: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);