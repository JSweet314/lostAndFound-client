import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ReportForm = ({
  name,
  description,
  location,
  date,
  reward,
  handleOnSubmit, 
  handleOnChange, 
  handleGoBack,
  routeId
}) => {
  const display = {display: routeId === 'lost' ? 'initial' : 'none'};
  return (
    <form
      onSubmit={event => handleOnSubmit(event)}
      className='report-form'>
      <h2 className='report-form__heading'>{routeId}</h2>
      <label htmlFor='name' className='report-form__label'>Item Name</label>
      <input
        required
        onChange={event => handleOnChange(event)}
        value={name}
        name='name'
        placeholder='required'
        className='report-form__input'
        type='text' />
      <label 
        htmlFor='description' 
        className='report-form__label'>
        Description
      </label>
      <textarea
        required 
        onChange={event => handleOnChange(event)}
        value={description}
        name='description'
        placeholder='required'
        className='report-form__textarea'
        type='text' />
      <label htmlFor='location' className='report-form__label'>Location</label>
      <input
        required
        onChange={event => handleOnChange(event)}
        value={location}
        name='location'
        placeholder='required'
        className='report-form__input'
        type='text' />
      <label htmlFor='date' className='report-form__label'>Date</label>
      <input
        required
        onChange={event => handleOnChange(event)}
        value={date}
        name='date'
        placeholder='required'
        className='report-form__input'
        type='date' />
      <label 
        htmlFor='reward' 
        style={display} 
        className='report-form__label'>
        Reward?
      </label>
      <input
        onChange={event => handleOnChange(event)}
        value={reward}
        name='reward'
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
        onClick={event => handleGoBack(event)}>
        Back
      </button>
    </form>
  );
};

ReportForm.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  reward: PropTypes.string,
  routeId: PropTypes.string,
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleGoBack: PropTypes.func.isRequired
};

export default ReportForm;