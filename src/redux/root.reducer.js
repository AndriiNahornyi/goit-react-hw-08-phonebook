import { combineReducers } from 'redux';
import filterReducer from './filter/slice.filter';
import contactListReducer from './contactList/slice.contactList';
import authReducer from './auth/slice.auth';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const rootReducer = combineReducers({
  filter: filterReducer,
  contactList: contactListReducer,
  auth: persistedAuthReducer,
});
