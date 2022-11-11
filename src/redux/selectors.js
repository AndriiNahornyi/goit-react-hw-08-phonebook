import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filter;
export const getContacts = state => state.contactList.items;
export const selectFilterContacts = createSelector(
  [getFilter, getContacts],
  (filter, items) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token;
// export const getFilterContacts = state =>
//   getContacts(state).filter(contact =>
//     contact.name.toLowerCase().includes(getFilter(state).toLowerCase())
//   );
