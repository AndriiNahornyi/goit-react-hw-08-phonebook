import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from './fetchStatus';
import { initialState } from './initial-state.auth';
import {
  registrationThunk,
  loginThunk,
  logoutThunk,
  currentUserThunk,
} from './thunk.auth';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registrationThunk.pending](state) {
      state.status = fetchStatus.loading;
    },
    [registrationThunk.fulfilled](state, action) {
      state.status = fetchStatus.success;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    [registrationThunk.rejected](state) {
      state.status = fetchStatus.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
    [loginThunk.pending](state) {
      state.status = fetchStatus.loading;
    },
    [loginThunk.fulfilled](state, action) {
      state.status = fetchStatus.success;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    [loginThunk.rejected](state) {
      state.status = fetchStatus.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
    [logoutThunk.pending](state) {
      state.status = fetchStatus.loading;
    },
    [logoutThunk.fulfilled](state, action) {
      state.status = fetchStatus.success;
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
    },
    [logoutThunk.rejected](state) {
      state.status = fetchStatus.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
    [currentUserThunk.pending](state) {
      state.status = fetchStatus.loading;
    },
    [currentUserThunk.fulfilled](state, action) {
      state.status = fetchStatus.success;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [currentUserThunk.rejected](state) {
      state.status = fetchStatus.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
