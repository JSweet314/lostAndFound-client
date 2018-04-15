import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import App from '../../components/App';

export class AppContainer extends Component {

  componentDidMount = () => {
    const storedUser = localStorage.getItem('LFUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.props.captureUser(user);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getUserGeo);
    }
  }

  componentDidUpdate = prevProps => {
    if ((prevProps.username !== this.props.username) && this.props.username) {
      this.props.fetchUserItems(this.props.userId);
    }
  }

  getUserGeo = userPosition => {
    const { latitude, longitude } = userPosition.coords;
    const position = { lat: latitude, lng: longitude };
    this.props.captureGeo(position);
  }

  handleLogOut = () => {
    this.props.logOutUser();
    this.props.captureItems([]);
    localStorage.clear();
  }

  render() {
    const { loggedIn, username } = this.props;
    return <App
      loggedIn={loggedIn}
      username={username}
      handleLogOut={this.handleLogOut} />;
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  username: state.user.username,
  userId: state.user.id
});

export const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(actions.logOutUser()),
  captureUser: user => dispatch(actions.captureUser(user)),
  fetchUserItems: userId => dispatch(actions.fetchUserItems(userId)),
  captureItems: itemArray => dispatch(actions.captureItems(itemArray)),
  captureGeo: position => dispatch(actions.captureGeo(position))
});

AppContainer.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
  userId: PropTypes.number,
  logOutUser: PropTypes.func.isRequired,
  captureUser: PropTypes.func.isRequired,
  captureItems: PropTypes.func.isRequired,
  fetchUserItems: PropTypes.func.isRequired,
  captureGeo: PropTypes.func.isRequired
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppContainer)
);