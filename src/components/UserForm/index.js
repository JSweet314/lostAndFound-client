import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const UserForm = ({
  routeId, 
  username, 
  email, 
  password, 
  handleOnChange, 
  handleOnSubmit, 
  showPassword,
  togglePasswordVisibility
}) => {
  const type = showPassword ? 'text' : 'password';
  const passwordDisplayBtnText = showPassword ? 
    'hide password' : 'show password';
  const buttonText = routeId === 'login' ? 'Log In' : 'Sign Up';
  const display = routeId === 'login' ? 'none' : 'initial';
  return (
    <form
      onSubmit={event => handleOnSubmit(event)}>
      <input 
        style={{display}}
        onChange={event => handleOnChange(event)}
        value={username}
        name='username'
        placeholder='username'
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
        type={type} />
      <button
        onClick={event => togglePasswordVisibility(event)}>
        {passwordDisplayBtnText}
      </button>
      <button type='submit'>{buttonText}</button>
    </form>
  );
};

UserForm.propTypes = {
  routeId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired
};

export default UserForm;