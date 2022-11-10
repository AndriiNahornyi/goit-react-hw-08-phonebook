import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk.auth';
import css from './Login.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const input = {
    email: setEmail,
    password: setPassword,
  };
  const onInput = evt => {
    input[evt.target.name](evt.target.value.trim());
  };
  const onSubmit = evt => {
    evt.preventDefault();
    dispatch(loginThunk({ email, password }));
  };
  return (
    <>
      <h2 className={css.Title}>Please Login</h2>
      <form className={css.Form} onSubmit={onSubmit}>
        <label>
          {/* Enter your email */}
          <input
            className={css.Input}
            required
            onChange={onInput}
            name="email"
            value={email}
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label>
          {/* Enter your password */}
          <input
            className={css.Input}
            required
            onChange={onInput}
            name="password"
            value={password}
            type="password"
            placeholder=" Enter your password"
          />
        </label>
        <button className={css.Btn} type="submit">
          Login
        </button>
      </form>
    </>
  );
};
