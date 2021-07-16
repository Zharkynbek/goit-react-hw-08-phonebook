import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  handleFilterContacts,
  handleDeleteContactsSuccess,
  handleDeleteContactsRequest,
  handleDeleteContactsError,
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
} from "./phonebookActions";

const contacts = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [handleDeleteContactsSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
  [fetchContactsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [handleDeleteContactsRequest]: () => true,
  [handleDeleteContactsError]: () => false,
  [handleDeleteContactsSuccess]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const filter = createReducer("", {
  [handleFilterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
