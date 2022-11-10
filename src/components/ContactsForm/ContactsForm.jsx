import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactList/thunk.contactList';
import { getContacts } from 'redux/selectors';
import css from './ContactsForm.module.css';
export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const onSubmit = e => {
    if (contacts.some(contact => contact.name === name)) {
      return alert('This contact has already been added!');
    }
    e.preventDefault();
    dispatch(addContact({ name: name, phone: number }));
    e.target.reset();
    //Alternative
    // setName('');
    // setNumber('');
  };

  return (
    <form className={css.contactsFormForm} onSubmit={onSubmit}>
      {/* <br /> */}
      <label className={css.contactsFormLabel}>
        <h4 className={css.Title}>Name</h4>
        {/* <br /> */}
        <input
          className={css.contactsFormInput}
          type="text"
          name="name"
          onChange={handleChange}
          // value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      {/* <br />
      <br /> */}
      <label className={css.contactsFormLabel}>
        <h4 className={css.Title}>Number</h4>
        {/* <br /> */}
        <input
          className={css.contactsFormInput}
          type="tel"
          name="number"
          onChange={handleChange}
          // value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      {/* <br /> */}
      <br />
      <button className={css.contactsFormBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
