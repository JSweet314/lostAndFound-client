import React from 'react';
import PropTypes from 'prop-types';

export const Item = (
  { itemId, status, name, description, date, handleOnClick }
) => (
  <article
    onClick={() => handleOnClick(itemId)}
    name={itemId}
    className='user-item'>
    <h3 name={itemId}>{status}: {name}</h3>
    <p name={itemId}>{description}</p>
    <p name={itemId}>{date}</p>
  </article>
);

Item.propTypes = {
  itemId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired
};

export default Item;