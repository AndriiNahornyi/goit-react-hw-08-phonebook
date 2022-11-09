import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'redux/auth/thunk.auth';
import { toast } from 'react-toastify';

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
    } else {
      toast.warn('The confirm password does not match');
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Enter your name
        <input
          required
          onChange={handleInput}
          name="name"
          value={name}
          type="text"
        />
      </label>
      <label>
        Enter your email
        <input
          required
          onChange={handleInput}
          name="email"
          value={email}
          type="email"
        />
      </label>
      <label>
        Enter your password
        <input
          required
          onChange={handleInput}
          name="password"
          value={password}
          type="password"
        />
      </label>
      <label>
        Confirm a password
        <input
          required
          onChange={handleInput}
          name="confirmPassword"
          value={confirmPassword}
          type="password"
        />
      </label>
      <button type="submit">Registration</button>
    </form>
  );
};
