import { ContactsForm } from '../ContactsForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';

import css from '../App/App.module.css';
export const App = () => {
  return (
    <section className={css.Section}>
      <div>
        <h1 className={css.appTitle}>Phonebook</h1>
        <ContactsForm />

        <h2 className={css.appTitle}>Contacts</h2>

        <Filter />
        <ContactList />
      </div>
    </section>
  );
};
