import { createAction } from "@reduxjs/toolkit";

// ================ addContacts ======================

export const addContactRequest = createAction("phonebook/AddContactRequest");
export const addContactSuccess = createAction("phonebook/AddContactSuccess");
export const addContactError = createAction("phonebook/AddContactError");

// ================ deleteContacts ======================

export const handleDeleteContactsRequest = createAction(
  "phonebook/DeleteContactRequest"
);
export const handleDeleteContactsSuccess = createAction(
  "phonebook/DeleteContactSuccess"
);
export const handleDeleteContactsError = createAction(
  "phonebook/DeleteContactError"
);

// ================ filterContatcs ======================

export const handleFilterContacts = createAction(
  "phonebook/FilterContact",
  (e) => ({
    payload: e.target.value,
  })
);

// ================ fetchContacts ======================

export const fetchContactsRequest = createAction(
  "phonebook/UpdateContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "phonebook/UpdateContactsSuccess"
);
export const fetchContactsError = createAction("phonebook/UpdateContactsError");
