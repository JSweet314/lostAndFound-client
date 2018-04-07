import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Welcome = ({ username }) => {
  const welcomeText = username ? `Welcome, ${username}` : 'Search or Sign In';
  return (
    <h2 className='welcome-greeting'>{welcomeText}</h2>
  );
};

Welcome.propTypes = {
  username: PropTypes.string
};

export default Welcome;