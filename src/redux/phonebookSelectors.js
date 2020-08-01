import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactById = (state, id) => {
  const items = getContacts(state);

  return items.find((item) => item.id === id);
};

export default {
  getContacts,
  getFilteredContacts,
  getContactById,
};
