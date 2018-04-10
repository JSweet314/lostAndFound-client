import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import FormsContainer from '../../containers/FormsContainer';
import Header from '../Header';
import LandingPage from '../LandingPage';
import ReportForm from '../ReportForm';
import './style.css';

const App = ({ username, loggedIn, handleLogOut }) => {
  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        username={username}
        handleLogOut={handleLogOut} />
      <Route exact path='/' render={() =>
        <LandingPage username={username} />} />
      <Route path='/user-forms/:id' component={FormsContainer} />
      <Route path='/report/:id' component={ReportForm} />
    </div>
  );
};

App.propTypes = {
  username: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired
};

export default App;