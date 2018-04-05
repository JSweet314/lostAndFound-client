import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__h1">Where is my 💩?</h1>
      <ul className="header__nav-list">
        <li className="header__nav-list-item">
          <Link className="header__nav-link" to="/">Home</Link>
        </li>
        <li className="header__nav-list-item">
          <Link className="header__nav-link" to="/forms/login">Log In</Link>
        </li>
        <li className="header__nav-list-item">
          <Link className="header__nav-link" to="/forms/signup">Sign Up</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;