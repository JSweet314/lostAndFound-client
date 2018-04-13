import React from 'react';
import Welcome from '../Welcome';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const LandingPage = ({username}) => {
  return (
    <main className='landing-page'>
      <Welcome username={username} />
      {
        username &&
        <div className='landing-page__btnGroup'>
          <Link 
            className='landing-page__btn' 
            to='/report/lost'>
          LOST
          </Link> 
          <Link 
            className='landing-page__btn' 
            to='/report/found'>
          FOUND
          </Link> 
        </div>
      }
    </main>
  );
};

LandingPage.propTypes = {
  username: PropTypes.string
};

export default LandingPage;