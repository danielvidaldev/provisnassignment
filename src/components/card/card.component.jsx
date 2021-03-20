import React from 'react';

import './card-styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img alt="user" src={`https://i.pravatar.cc/200?img=${props.customer.id + 10}`} /> 
    {/* Added a +10 at the end as there were some children amongst the first pictures */}
    <h2> {props.customer.username} </h2>
    <p> {props.customer.email} </p>
    <p> Favorite coin: {props.customer.website}</p>
  </div>
)