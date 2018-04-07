import React from 'react';
import Welcome from '../Welcome';
import Search from '../Search';
import PropTypes from 'prop-types';
import './style.css';

const LandingPage = ({username}) => {
  return (
    <main className='landing-page'>
      <Welcome username={username} />
      <Search />
    </main>
  );
};

LandingPage.propTypes = {
  username: PropTypes.string
};

export default LandingPage;