import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Link } from 'react-router-dom';

const ReportForm = ({
  name,
  description,
  date,
  reward,
  handleOnSubmit,
  handleOnChange,
  handleGoBack,
  routeId
}) => {
  const display = { display: routeId === 'lost' ? 'initial' : 'none' };
  const isDisabled = name && description && date ? false : true;
  return (
    <div className='report-form-container'>
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
          className='report-form__input name'
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
        <div className='report-form__nav'>
          <button
            className='report-form__btn'
            onClick={event => handleGoBack(event)}>
            Back
          </button>
          <Link
            to='/report/map'
            disabled={isDisabled}
            type='submit'
            className='report-form__btn'>
            next
          </Link>
        </div>
      </form>
    </div>
  );
};

ReportForm.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  reward: PropTypes.string.isRequired,
  routeId: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleGoBack: PropTypes.func.isRequired
};

export default ReportForm;