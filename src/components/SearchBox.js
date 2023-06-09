import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--black bg-light-pink'
        type='search'
        placeholder='Find a droid!'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;