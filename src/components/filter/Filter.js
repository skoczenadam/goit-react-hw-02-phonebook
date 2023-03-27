import React, { useState } from 'react';
import PropTypes from "prop-types";

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

Filter.propTypes = {
  onHandleFilterChange: PropTypes.func,
};