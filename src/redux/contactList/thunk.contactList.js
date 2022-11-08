import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactList, addContacts, removeContacts } from 'API';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContactList();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await addContacts(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await removeContacts(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
