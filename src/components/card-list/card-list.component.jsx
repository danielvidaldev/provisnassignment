import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
      {props.customers.map(customer => ( 
        <Card key={customer.id} customer={customer}/>
      ))}
  </div>
)