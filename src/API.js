import axios from 'axios';
export const getContactsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
// Request User data
export const getNewUser = async credentials => {
  const { data } = await getContactsApi.post('/users/signup', credentials);
  return data;
};
export const loginUser = async credentials => {
  const { data } = await getContactsApi.post('/users/login', credentials);
  return data;
};
export const logOutUser = async credentials => {
  const { data } = await getContactsApi.post('/users/logout', credentials);
  return data;
};
export const currentUser = async credentials => {
  const { data } = await getContactsApi.get('/users/current', credentials);
  return data;
};
// Request Contacts data

export const getContacts = async () => {
  const { data } = await getContactsApi.get('/contacts');
  return data;
};
export const addContacts = async credentials => {
  const { data } = await getContactsApi.post('/contacts', credentials);
  return data;
};
export const removeContacts = async id => {
  const { data } = await getContactsApi.delete(`/contacts/${id}`);
  return data;
};
export const UpdateContacts = async id => {
  const { data } = await getContactsApi.patch(`/contacts/${id}`, id);
  return data;
};
