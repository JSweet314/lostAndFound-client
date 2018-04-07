import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <form className='search-form'>
        <input
          type='text'
          className='search-form__search'
          value={searchValue}
          name='searchValue'
          onChange={event => this.handleOnChange(event)}
          aria-label='item search'
          placeholder="What are we lookin' for?" />
        <button 
          className='search-form__submit'
          type='submit'>
          Search
        </button>
      </form>
    );
  }
}