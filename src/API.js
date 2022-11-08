import axios from 'axios';
// API endpoint https://6368ed9715219b84960a7cf3.mockapi.io/:endpoint
const contactListApi = axios.create({
  baseURL: 'https://6368ed9715219b84960a7cf3.mockapi.io/',
});
export const getContactList = async () => {
  const { data } = await contactListApi.get('/contacts');
  return data;
};
export const addContacts = async body => {
  const { data } = await contactListApi.post('/contacts', body);
  return data;
};
export const removeContacts = async id => {
  const { data } = await contactListApi.delete(`/contacts/${id}`);
  return data;
};
