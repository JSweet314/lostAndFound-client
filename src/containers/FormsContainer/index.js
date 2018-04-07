import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserForm from '../../components/UserForm';
import * as actions from '../../actions';

export class FormsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      showPassword: false
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { id } = this.props.match.params;
    if (id === 'login') {
      const { email, password } = this.state;
      this.props.signInUser({ email, password });
    } else {
      const { username, email, password } = this.state;
      this.props.submitNewUser({ username, email, password });
    }
    this.setState({ 
      username: '', 
      email: '', 
      password: '', 
      showPassword: false 
    });
  }

  togglePasswordVisibility = event => {
    event.preventDefault();
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <UserForm
        routeId={id}
        handleOnSubmit={this.handleOnSubmit}
        handleOnChange={this.handleOnChange}
        togglePasswordVisibility={this.togglePasswordVisibility}
        {...this.state}
      />
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  captureUser: user => dispatch(actions.captureUser(user)),
  submitNewUser: user => dispatch(actions.submitNewUser(user)),
  signInUser: user => dispatch(actions.signInUser(user))
});

FormsContainer.propTypes = {
  match: PropTypes.object.isRequired,
  captureUser: PropTypes.func.isRequired,
  submitNewUser: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(FormsContainer);