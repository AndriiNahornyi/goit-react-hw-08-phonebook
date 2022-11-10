import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNewUser, loginUser } from 'API';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (data, thunkAPI) => {
    try {
      const responce = await getNewUser(data);
      return responce;
    } catch (error) {
      // console.log('error', error);
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const responce = await loginUser(data);
      return responce;
    } catch (error) {
      // console.log('error', error);
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
