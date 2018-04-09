import React from 'react';
import Welcome from '../Welcome';
import {Link} from 'react-router-dom';
import Search from '../Search';
import PropTypes from 'prop-types';
import './style.css';

const LandingPage = ({username}) => {
  return (
    <main className='landing-page'>
      <Welcome username={username} />
      <Search />
      {
        username &&
        <div>
          <h2 className='or'>Or</h2>
          <Link className='report-link' to='/report'>Report Found Item</Link> 
        </div>
      }
    </main>
  );
};

LandingPage.propTypes = {
  username: PropTypes.string
};

export default LandingPage;