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
      loading: true,
      markerCoords: {}
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
    this.props.captureMarkerCoords(location);
    this.setState({ loading: false, markerCoords: location });
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
        {...this.state}
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

MapContainer.propTypes = {
  userLocation: PropTypes.object,
  captureGeo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);