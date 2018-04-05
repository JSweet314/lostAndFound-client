import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Header from '../../components/Header';
import FormsContainer from '../FormsContainer';
import './style.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route path="/forms/:id" component={FormsContainer} />
      </div>
    );
  }
}

export default withRouter(connect()(App));