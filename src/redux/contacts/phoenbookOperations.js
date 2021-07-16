import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  handleDeleteContactsRequest,
  handleDeleteContactsSuccess,
  handleDeleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./phonebookActions";

axios.defaults.baseURL = "http://localhost:4040";

export const addContact = (contact) => (dispatch) => {

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(handleDeleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(handleDeleteContactsSuccess(id)))
    .catch((error) => dispatch(handleDeleteContactsError(error)));
};

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => {
      console.log(data);
      dispatch(fetchContactsSuccess(data));
    })
    .catch((error) => dispatch(fetchContactsError(error)));
};
