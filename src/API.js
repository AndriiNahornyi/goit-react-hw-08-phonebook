import axios from 'axios';
export const getContactsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getNewUser = async body => {
  const { data } = await getContactsApi.post('/users/signup', body);
  return data;
};

export const loginUser = async body => {
  const { data } = await getContactsApi.post('/users/login', body);
  return data;
};

export const addContacts = async body => {
  const { data } = await getContactsApi.post('/contacts', body);
  return data;
};
export const removeContacts = async id => {
  const { data } = await getContactsApi.delete(`/contacts/${id}`);
  return data;
};
