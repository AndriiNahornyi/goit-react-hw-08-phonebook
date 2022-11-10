import { Layout } from '../Layout';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login';
import { Home } from 'pages/Home';
import Contacts from 'pages/Contacts/Contacts';
import { useEffect } from 'react';
import { currentUserThunk } from 'redux/auth/thunk.auth';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
};
