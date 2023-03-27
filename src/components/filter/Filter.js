import React, { useState } from 'react';

export const Filter = ({ onHandleFilterChange }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setFilterValue(value);
    onHandleFilterChange(value);
  }

  return (
    <>
      <p>Find contacts by Name</p>
      <input value={filterValue} onChange={handleChange} />
    </>
  )
}