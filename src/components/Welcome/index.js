import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Welcome = ({ username }) => {
  return (username ?
    <h2 className='welcome-greeting'>{`Welcome, ${username}`}</h2> :
    <div className='welcome-greeting'>
      <h2 className='welcome-title'>Lost & Found</h2>
      <p className='welcome-instructions'>
        Here to help your organization track reported lost and found 
        items. Be sure to view existing reports prior to reporting a new item.
      </p>
      <p className='welcome-call-to-action'>
        Please log In to Report/Search
      </p>
    </div>
  );
};

Welcome.propTypes = {
  username: PropTypes.string
};

export default Welcome; 