import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({ loggedIn, username }) => {
  
  return (
    <header className='header'>
      <h1 className='header__h1'>Lost & Found</h1>
      <ul className='header__nav-list'>
        <li className='header__nav-list-item'>
          <Link className='header__nav-link' to='/'>Home</Link>
        </li>
        <li className='header__nav-list-item'>
          {loggedIn ? 
            <Link className='header__nav-link' to='/'>Log Out</Link> :
            <Link className='header__nav-link' to='/forms/login'>Log In</Link>
          }
        </li>
        <li className='header__nav-list-item'>
          {loggedIn ? <div className='header__nav-link'>{username}</div> : (
            <Link className='header__nav-link' to='/forms/signup'>Sign Up</Link>
          )}
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string
};

export default Header;