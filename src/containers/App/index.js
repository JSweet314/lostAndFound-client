import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import FormsContainer from '../FormsContainer';
import LandingPage from '../../components/LandingPage';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './style.css';

export class App extends Component {

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
    return (
      <div className="app">
        <Header 
          loggedIn={loggedIn} 
          username={username}
          handleLogOut={this.handleLogOut} />
        <Route exact path='/' render={() =>
          <LandingPage username={username} />} />
        <Route path="/forms/:id" component={FormsContainer} />
      </div>
    );
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

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
  logOutUser: PropTypes.func.isRequired,
  captureUser: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));