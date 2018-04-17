import React from 'react';

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

export default Item;