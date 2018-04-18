import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserFormContainer from '../../containers/UserFormContainer';
import ReportFormContainer from '../../containers/ReportFormContainer';
import Header from '../Header';
import LandingPage from '../LandingPage';
import ItemsContainer from '../../containers/ItemsContainer';
import './style.css';

const App = ({ username, loggedIn, handleLogOut }) => {
  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        username={username}
        handleLogOut={handleLogOut} />
      <Switch>
        <Route exact path='/' render={() =>
          <LandingPage username={username} />} />
        <Route path='/user-forms/:id' component={UserFormContainer} />
        <Route path='/report/:id' component={ReportFormContainer} />
        <Route path='/items' component={ItemsContainer} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  username: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired
};

export default App;