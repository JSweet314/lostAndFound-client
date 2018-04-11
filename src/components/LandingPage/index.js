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
      {
        username &&
        <div className='landing-page__btnGroup'>
          <Link 
            className='landing-page__btn' 
            to='/report/lost'>
          Lost an Item?
          </Link> 
          <Link 
            className='landing-page__btn' 
            to='/report/found'>
          Found an Item?
          </Link> 
        </div>
      }
      <Search />
    </main>
  );
};

LandingPage.propTypes = {
  username: PropTypes.string
};

export default LandingPage;