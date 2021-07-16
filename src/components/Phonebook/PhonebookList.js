import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/phoenbookOperations";
import filterContacts from "../../helpers/filterContacts";
import phonebookSelectors from "../../redux/contacts/phonebookSelectors";

const PhonebookList = ({
  filter,
  contacts,
  onDeleteContact,
  onFetchContacts,
}) => {
  useEffect(() => {
    onFetchContacts();
  }, [onFetchContacts]);
  const filteredContacts = filterContacts(contacts, filter);
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: phonebookSelectors.getFilterValue(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(deleteContact(id)),
    onFetchContacts: () => dispatch(fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
