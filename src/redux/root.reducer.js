import { combineReducers } from 'redux';
import filterReducer from './filter/slice.filter';
import contactListReducer from './contactList/slice.contactList';
import authReducer from './auth/slice.auth';
export const rootReducer = combineReducers({
  filter: filterReducer,
  contactList: contactListReducer,
  auth: authReducer,
});
