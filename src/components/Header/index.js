import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({ loggedIn, username, handleLogOut }) => {
  
  return (
    <header className='header'>
      <Link to='/' className='header__h1'>Lost & Found</Link>
      <ul className='header__nav-list'>
        <li className='header__nav-list-item'>
          {loggedIn ? 
            <Link 
              onClick={() => handleLogOut()}
              className='header__nav-link' to='/'>
              Log Out
            </Link> :
            <Link className='header__nav-link' to='/user-forms/login'>Log In</Link>
          }
        </li>
        <li className='header__nav-list-item'>
          {loggedIn ? 
            <span className='header__username'>{username}</span> :
            <Link className='header__nav-link' to='/user-forms/signup'>Sign Up</Link>
          }
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
  handleLogOut: PropTypes.func.isRequired
};

export default Header;