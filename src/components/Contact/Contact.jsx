import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ props, deleteContact }) => {
  return props.map(({ name, id }) => {
    return (
      <div key={id}>
        <h2>{name}</h2>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </div>
    );
  });
};

Contact.propTypes = {};

export default Contact;
