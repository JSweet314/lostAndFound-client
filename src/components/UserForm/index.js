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
  togglePasswordVisibility,
  errorMessage
}) => {
  const welcomeBackDisplay = routeId === 'login' ? 'initial' : 'none';
  const usernameDisplay = routeId === 'login' ? 'none' : 'initial';
  const passwordDisplayBtnText = showPassword ? 'hide' : 'show';
  const buttonText = routeId === 'login' ? 'Log In' : 'Sign Up';
  const userNameRequired = routeId === 'login' ? false : true;
  const showDisabled = password ? false : true;
  const isDisabled = email && password ? false : true;
  const type = showPassword ? 'text' : 'password';

  return (
    <form
      className='user-form'
      onSubmit={event => handleOnSubmit(event)}>
      <input 
        className='user-form__input'
        style={{display: usernameDisplay}}
        onChange={event => handleOnChange(event)}
        value={username}
        name='username'
        placeholder="name"
        required={userNameRequired}
        type='text' />
      <h2  
        className='user-form__greeting' 
        style={{display: welcomeBackDisplay}}>
        Welcome Back!
      </h2>
      <input 
        className='user-form__input'
        onChange={event => handleOnChange(event)}
        value={email}
        name='email'
        placeholder='email'
        required
        type='email' />
      <div className='user-form__password-fields'>
        <input 
          className='password-fields__input'
          onChange={event => handleOnChange(event)}
          value={password}
          name='password'
          placeholder='password'
          required
          type={type} />
        <button 
          disabled={showDisabled}
          className='password-fields__password-toggle-btn'
          onClick={event => togglePasswordVisibility(event)}>
          {passwordDisplayBtnText}
        </button>
      </div>
      {
        errorMessage && 
        <h1 className='error'>
          Invalid username/password, try again or sign up
        </h1>
      }
      <button 
        className='user-form__btn user-form__btn--submit'
        disabled={isDisabled}
        type='submit'>
        {buttonText}
      </button>
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
  togglePasswordVisibility: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default UserForm;