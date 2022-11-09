import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk.auth';

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
    <form onSubmit={onSubmit}>
      <label>
        Enter your email
        <input
          required
          onChange={onInput}
          name="email"
          value={email}
          type="email"
        />
      </label>
      <label>
        Enter your password
        <input
          required
          onChange={onInput}
          name="password"
          value={password}
          type="password"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
