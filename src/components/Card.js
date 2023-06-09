import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-purple br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='droids' src={`https://robohash.org/set_set3/${id+70}?250x250`} />
      <div>
        <h2>{name}</h2>
        <p>{id+5000}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;