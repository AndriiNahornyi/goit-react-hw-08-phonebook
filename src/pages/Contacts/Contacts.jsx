import { ContactList } from 'components/ContactList';
import { ContactsForm } from 'components/ContactsForm';
import { Filter } from 'components/Filter';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactList/thunk.contactList';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  });
  return (
    <>
      <section className={css.Section}>
        <div>
          <h1 className={css.appTitle}>Phonebook</h1>
          <ContactsForm />
          <h2 className={css.appTitle}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </section>
    </>
  );
}
