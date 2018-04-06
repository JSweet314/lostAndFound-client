import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Header from '../../components/Header';
import FormsContainer from '../FormsContainer';
import './style.css';

export class App extends Component {
  // componentDidMount = async () => {
  //   const response = await fetch('/api/v1/users');
  //   const parsed = await response.json();
  // }

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