import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapComponent from '../../components/MapComponent';
import { googleUrl } from '../../private/keys';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import * as API from '../../api';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerCoords: {},
      center: null
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.markerCoords !== this.props.markerCoords) {
      this.setState({
        center: this.props.markerCoords,
        markerCoords: this.props.markerCoords
      });
    }
  }

  onMapClick = event => {
    const location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    if (this.props.routeId === 'map') {
      this.reverseGeoCode(location);
    }
    this.setState({ markerCoords: location });
  }

  reverseGeoCode = async location => {
    const response = await API.reverseGeoCode(location);
    this.props.handleMapClick({
      ...location,
      name: response.results[0].formatted_address
    });

  }

  containerElement = () => (
    <div
      className="lostAndFoundMap"
      style={{
        position: 'absolute',
        top: this.props.top || '10rem',
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
        position={this.state.center || this.props.userLocation}
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
  loading: state.userLocation.loading,
  markerCoords: state.mapMarker
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