import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contactList/thunk.contactList';
import { selectFilterContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.List}>
      {contacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          <p
            className={css.ContactListItem}
          >{`${contact.name}: ${contact.phone}`}</p>
          <button
            className={css.contactListBtn}
            onClick={() => handleDeleteContact(contact.id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
