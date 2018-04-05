import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import UserForm from '../../components/UserForm';

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
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {id} = this.props.match.params;
    return (
      <UserForm 
        routeId={id}
        handleOnChange={this.handleOnChange}
        {...this.state}
      />
    );
  }
}

FormsContainer.propTypes = {
  match: PropTypes.object
};

export default connect()(FormsContainer);