import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phoneBook/add', (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('phoneBook/delete', id => {
  return {
    payload: id,
  };
});

const changeFilter = createAction('phoneBook/changeFilter', filter => {
  return {
    payload: filter,
  };
});

const storageContact = createAction('phoneBook/storageContact');
// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter, storageContact };
