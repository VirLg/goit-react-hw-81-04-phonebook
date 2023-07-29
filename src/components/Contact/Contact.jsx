import React from 'react';
import PropTypes from 'prop-types';
import { ContactsDiv, Button } from './Contacts.styled';

const Contact = ({ props, deleteContact }) => {
  return props.map(({ name, id }) => {
    return (
      <ContactsDiv key={id}>
        <h2>{name}</h2>
        <Button type="button" onClick={() => deleteContact(id)}>
          Delete
        </Button>
      </ContactsDiv>
    );
  });
};

Contact.propTypes = {};

export default Contact;
