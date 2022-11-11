import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'redux/auth/thunk.auth';
import { toast } from 'react-toastify';
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
    confirmPassword: setConfirmPassword,
  };
  const handleInput = evt => {
    inputs[evt.target.name](evt.target.value.trim());
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (password === confirmPassword) {
      const userInfo = {
        name,
        email,
        password,
      };
      dispatch(registrationThunk(userInfo));
      evt.target.reset();
    } else {
      toast.warn('The confirm password does not match');
    }
  };
  return (
    <>
      <h2 className={css.Title}>Please Sign Up</h2>
      <form className={css.Form} onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          {/* Enter your name */}
          <input
            id="name"
            className={css.Input}
            required
            onChange={handleInput}
            name="name"
            value={name}
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label htmlFor="email">
          {/* Enter your email */}
          <input
            id="email"
            className={css.Input}
            required
            onChange={handleInput}
            name="email"
            value={email}
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="password">
          {/* Enter your password */}
          <input
            id="password"
            className={css.Input}
            required
            onChange={handleInput}
            name="password"
            value={password}
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <label>
          {/* Confirm a password */}
          <input
            className={css.Input}
            required
            onChange={handleInput}
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            placeholder="Confirm a password"
          />
        </label>
        <button className={css.Btn} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};
