import { Layout } from '../Layout';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense, useEffect } from 'react';
import { currentUserThunk } from 'redux/auth/thunk.auth';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { selectToken } from 'redux/selectors';

const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));
const Registration = lazy(() => import('../../pages/Registration'));
const Login = lazy(() => import('../../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(currentUserThunk());
    }
  }, [dispatch, token]);

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </Layout>
  );
};
