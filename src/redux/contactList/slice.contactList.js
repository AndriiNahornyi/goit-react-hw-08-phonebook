import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './thunk.contactList';
const status = {
  Init: 'init',
  Loading: 'loading',
  Success: 'success',
  Error: 'error',
};
const initialState = {
  items: [],
  status: false,
  error: null,
};
const contactListSlice = createSlice({
  name: 'contactList',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.status = status.Loading;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.status = status.Success;
      state.items = [...action.payload];
    },
    [fetchContacts.rejected]: state => {
      state.status = status.Error;
    },

    [addContact.pending]: state => {
      state.status = status.Loading;
    },
    [addContact.fulfilled]: (state, action) => {
      state.status = status.Success;
      state.items = [...state.items, action.payload];
    },
    [addContact.rejected]: state => {
      state.status = status.Error;
    },

    [deleteContact.pending]: state => {
      state.status = status.Loading;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.status = status.Success;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: state => {
      state.status = status.Error;
    },
  },
});
export default contactListSlice.reducer;
