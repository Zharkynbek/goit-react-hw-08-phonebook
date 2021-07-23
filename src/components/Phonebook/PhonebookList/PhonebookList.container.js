import { connect } from "react-redux";
import {
  deleteContact,
  fetchContacts,
} from "../../../redux/contacts/phoenbookOperations";
import { PhonebookList } from "./PhonebookList";
import phonebookSelectors from "../../../redux/contacts/phonebookSelectors";

const mapStateToProps = (state) => {
  return {
    contacts: state.phonebook.contacts,
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
