import { fetchStatus } from './fetchStatus.js';

export const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  status: fetchStatus.init,
};
