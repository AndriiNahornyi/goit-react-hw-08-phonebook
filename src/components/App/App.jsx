import { ContactsForm } from '../ContactsForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Layout } from '../Layout';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../App/App.module.css';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login/Login';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <section className={css.Section}>
        <div>
          <h1 className={css.appTitle}>Phonebook</h1>
          <ContactsForm />

          <h2 className={css.appTitle}>Contacts</h2>

          <Filter />
          <ContactList />
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
};
