import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';
import Form from './Form/Form';

const App = function () {
  //*******************use */
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.contacts === []) {
      setContacts([]);
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // useEffect(() => {
  //   console.log('localStorage.contacts', localStorage.contacts);
  //   if (localStorage.contacts === []) return;
  //   console.log('first', 111);
  //   // setContacts(JSON.parse(localStorage.getItem('contacts')));
  // }, []);
  //*****************use */
  const addContact = props => {
    const { name, number } = props;
    if (contacts) {
      const check = contacts.find(el => el.name === name);
      if (check) return alert('NoNoNo');
      setContacts(prev => [{ name, number, id: nanoid() }, ...prev]);
    }
  };
  const filterContact = e => setFilter(e.target.value);

  const deleteContact = id => setContacts(contacts.filter(el => el.id !== id));

  const visible =
    contacts !== [] && contacts.filter(el => el.name.includes(filter));

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form addContact={addContact} />
      <Filter filterContact={filterContact} stateFilter={filter} />
      <Contact props={visible} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
