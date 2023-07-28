import { useState } from 'react';
import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';

import Form from './Form/Form';

const App = function () {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = props => {
    const { name, number } = props;

    if (contacts) {
      const check = contacts.find(el => el.name === name);
      if (check) return alert('NoNoNo');

      setContacts(prev => [{ name, number, id: nanoid() }, ...prev]);
    }
  };
  const filterContact = e => setFilter(e.target.value);

  const deleteContact = id =>
    setContacts(prev => prev.contacts.filter(el => el.id !== id));

  const visible = contacts.filter(el => el.name.includes(filter));

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Contact props={visible} deleteContact={deleteContact} />
      <Form addContact={addContact} />
      <Filter filterContact={filterContact} stateFilter={filter} />
    </div>
  );
};

export default App;
