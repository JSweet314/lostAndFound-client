import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import FormsContainer from '../FormsContainer';
import PropTypes from 'prop-types';
import './style.css';

export class App extends Component {
  render() {
    const { loggedIn, username } = this.props;
    return (
      <div className="app">
        <Header loggedIn={loggedIn} username={username} />
        <Route path="/forms/:id" component={FormsContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  username: state.user.username
});

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string
};

export default withRouter(connect(mapStateToProps)(App));