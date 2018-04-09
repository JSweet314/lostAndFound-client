import React from 'react';
import Welcome from '../Welcome';
import {Link} from 'react-router-dom';
import Search from '../Search';
import PropTypes from 'prop-types';

const LandingPage = ({username}) => {
  return (
    <main className='landing-page'>
      <Welcome username={username} />
      <Search />
      <Link to='/report'>Report Found Item</Link> 
    </main>
  );
};

LandingPage.propTypes = {
  username: PropTypes.string
};

export default LandingPage;