import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contacts from "./phonebookReducer";
// import logger from 'redux-logger';

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts,
  },
  middleware: [...defaultMiddleware],
});

export default store;
