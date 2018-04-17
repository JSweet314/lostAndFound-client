import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import ReportForm from '../../components/ReportForm';
import './style.css';
import MapContainer from '../MapContainer';

export class ReportFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      location: {
        name: '',
        position: {
          lat: null,
          lng: null
        }
      },
      date: '',
      reward: ''
    };
  }

  handleMapClick = location => this.setState({ location })

  handleOnChange = event => {
    const { name, value } = event.target;
    if (event.target.name === 'mapSearch') {
      const { location } = this.state;
      this.setState({ location: { ...location, name: value } })
    } else {
      this.setState({ [name]: value });
    }
  }

  handleGoBack = event => {
    event.preventDefault();
    this.props.history.goBack();
  }

  handleNext = event => {
    event.preventDefault();
    this.props.history.goForward('/report/map');
  }

  handleOnSubmit = () => {
    const { userId } = this.props;
    this.props.reportItem({ ...this.state, status: 'lost', userId });
    this.setState(
      {
        name: '',
        description: '',
        date: '',
        reward: '',
        location: {
          name: '',
          position: {
            lat: null,
            lng: null
          }
        }
      }
    );
  }

  render() {
    const { id } = this.props.match.params;
    const mapDisplay = id === 'map' ? true : false;
    const searchPlaceholder = 'Enter address or drop map marker';
    return (
      <div className='report-form-container'>
        {
          mapDisplay ?
            <div className='map-report'>
              <button className='report-form__btn' onClick={() => this.props.history.goBack()}>{'< Back'}</button>
              <input
                type="text"
                placeholder={searchPlaceholder}
                name='mapSearch'
                onChange={event => this.handleOnChange(event)}
                value={this.state.location.name} />
              <Link 
                onClick={event => this.handleOnSubmit(event)}
                className='report-form__btn' 
                to='/'>
                {'Submit >'}
              </Link>
              <MapContainer
                routeId={id}
                top='200px'
                height='75%'
                width='100%'
                handleMapClick={this.handleMapClick} />
            </div> :
            <ReportForm
              {...this.state}
              routeId={id}
              handleGoBack={this.handleGoBack}
              handleOnChange={this.handleOnChange}
              handleOnSubmit={this.handleOnSubmit}
            />
        }
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  reportItem: item => dispatch(actions.reportItem(item)),
  captureMarker: location => dispatch(actions.captureMarker(location))
});

export const mapStateToProps = state => ({
  userId: state.user.id
});

ReportFormContainer.propTypes = {
  history: PropTypes.object.isRequired,
  userId: PropTypes.number,
  match: PropTypes.object.isRequired,
  reportItem: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ReportFormContainer
);