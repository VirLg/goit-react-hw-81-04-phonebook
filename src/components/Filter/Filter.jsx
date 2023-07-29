import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filterContact, stateFilter }) => {
  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
      }}
    >
      Search
      <input
        onChange={filterContact}
        value={stateFilter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

// Filter.propTypes = {};

export default Filter;
