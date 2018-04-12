import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import ReportForm from '../../components/ReportForm';
import Map from '../../components/Map';
import {googleUrl} from '../../private/keys';
import './style.css';
import { MapContainer } from '../MapContainer';

export class ReportFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      location: '',
      date: '',
      reward: ''
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleGoBack = event => {
    event.preventDefault();
    this.props.history.goBack();
  }

  captureMarkerCoords = location => {
    const { lat, lng } = location;
    this.setState({ location: `lat: ${lat}, lng: ${lng}` });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const { userId } = this.props;
    this.props.reportItem({ ...this.state, status: id, userId });
    this.setState(
      {
        name: '',
        description: '',
        location: '',
        date: '',
        reward: ''
      }, 
      this.props.history.goBack
    );
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className='report-form-container'>
        <ReportForm
          {...this.state}
          routeId={id}
          handleGoBack={this.handleGoBack}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        <MapContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  reportItem: item => dispatch(actions.reportItem(item))
});

export const mapStateToProps = state => ({
  userId: state.user.id
});

ReportFormContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  reportItem: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ReportFormContainer);