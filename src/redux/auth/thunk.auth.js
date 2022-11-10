import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUser,
  getContactsApi,
  getNewUser,
  loginUser,
  logOutUser,
} from 'API';

export const token = {
  set(token) {
    getContactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    getContactsApi.defaults.headers.common.Authorization = '';
  },
};

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (data, thunkAPI) => {
    try {
      const response = await getNewUser(data);
      token.set(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const response = await loginUser(data);
      token.set(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await logOutUser();
      token.unset(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
export const currentUserThunk = createAsyncThunk(
  'auth/current',
  async (data, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      token.set(state.auth.token);
      // console.log('token', token);
      const response = await currentUser(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
