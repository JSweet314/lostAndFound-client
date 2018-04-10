import React, {Component} from 'react';
import './style.css';

export default class ReportForm extends Component {
  constructor(){
    super();
    this.state = {
      lost: true
    };
  }

  goBack = event => {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    const { id } = this.props.match.params;
    const display = {
      display: id === 'lost' ? 'initial' : 'none'
    };
    
    return (
      <form className='report-form'>
        <h2 className='report-form__heading'>{id}</h2>
        <label className='report-form__label'>Item Name</label>
        <input
          placeholder='required'
          className='report-form__input' 
          type='text' />
        <label className='report-form__label'>Description</label>
        <textarea
          placeholder='required'
          className='report-form__textarea' 
          type='text' />
        <label className='report-form__label'>Location</label>
        <input
          placeholder='required'
          className='report-form__input' 
          type='text' />
        <label className='report-form__label'>Date</label>
        <input
          placeholder='required'
          className='report-form__input' 
          type='date' />
        <label style={display} className='report-form__label'>Reward?</label>
        <input
          style={display}
          placeholder='$?'
          className='report-form__input' 
          type='text' />
        <button 
          type='submit'
          className='report-form__btn'>
          Submit
        </button>
        <button
          className='report-form__btn'
          onClick={this.goBack}>
          Back
        </button>
      </form>
    );
  }
}