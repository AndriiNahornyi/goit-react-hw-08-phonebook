import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from './fetchStatus';
import { initialState } from './initial-state.auth';
import { registrationThunk, loginThunk } from './thunk.auth';

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
    [registrationThunk.rejected](state, action) {
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
    [loginThunk.rejected](state, action) {
      state.status = fetchStatus.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
