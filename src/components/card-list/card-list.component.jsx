import React from 'react';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
      {props.customers.map(customers => ( 
        <h1 key={customers.id}> {customers.name} </h1>
      ))}
  </div>
)