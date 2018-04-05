import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserForm from '../../components/UserForm';
import * as actions from '../../actions';

export class FormsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.captureUser(this.state);
    this.setState({ name: '', email: '', password: '' });
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <UserForm
        routeId={id}
        handleOnSubmit={this.handleOnSubmit}
        handleOnChange={this.handleOnChange}
        {...this.state}
      />
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  captureUser: user => dispatch(actions.captureUser(user))
});

FormsContainer.propTypes = {
  match: PropTypes.object.isRequired,
  captureUser: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(FormsContainer);