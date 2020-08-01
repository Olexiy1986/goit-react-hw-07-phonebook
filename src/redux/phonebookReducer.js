import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./phonebookActions";

const addContact = (state, action) => [...state, action.payload];
const removeContact = (state, action) => {
  return state.filter((item) => item.id !== action.payload);
};

const items = createReducer([], {
  [phonebookActions.getContactsSuccess]: (_, action) => action.payload,
  [phonebookActions.addContactSuccess]: addContact,
  [phonebookActions.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [phonebookActions.filterChange]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });
