import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const UserForm = (
  {routeId, name, email, password, handleOnChange, handleOnSubmit}
) => {
  const buttonText = routeId === 'login' ? 'Log In' : 'Sign Up';
  const display = routeId === 'login' ? 'none' : 'initial';
  return (
    <form
      onSubmit={event => handleOnSubmit(event)}>
      <input 
        style={{display}}
        onChange={event => handleOnChange(event)}
        value={name}
        name='name'
        placeholder='name'
        type='text' />
      <input 
        onChange={event => handleOnChange(event)}
        value={email}
        name='email'
        placeholder='email'
        type='email' />
      <input 
        onChange={event => handleOnChange(event)}
        value={password}
        name='password'
        placeholder='password'
        type='password' />
      <button type='submit'>{buttonText}</button>
    </form>
  );
};

UserForm.propTypes = {
  routeId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
};

export default UserForm;