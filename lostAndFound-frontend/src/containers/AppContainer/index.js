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
  }

  handleLogOut = () => {
    this.props.logOutUser();
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

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  username: state.user.username
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(actions.logOutUser()),
  captureUser: user => dispatch(actions.captureUser(user))
});

AppContainer.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
  logOutUser: PropTypes.func.isRequired,
  captureUser: PropTypes.func.isRequired
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppContainer)
);