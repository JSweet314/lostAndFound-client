import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import ReportForm from '../../components/ReportForm';

export class ReportFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      location: '',
      date: '',
      reward: ''
    };
  }

  handleGoBack = event => {
    event.preventDefault();
    this.props.history.goBack();
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const { userId } = this.props;
    this.props.reportItem({ ...this.state, status: id, userId });
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { id } = this.props.match.params;
    return <ReportForm
      {...this.state}
      routeId={id}
      handleGoBack={this.handleGoBack}
      handleOnChange={this.handleOnChange}
      handleOnSubmit={this.handleOnSubmit}
    />;
  }
}

const mapDispatchToProps = dispatch => ({
  reportItem: item => dispatch(actions.reportItem(item))
});

const mapStateToProps = state => ({
  userId: state.user.id
});

ReportFormContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  reportItem: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ReportFormContainer);