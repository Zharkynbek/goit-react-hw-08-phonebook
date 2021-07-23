import { connect } from "react-redux";
import { addContact } from "../../../redux/contacts/phoenbookOperations";
import { PhonebookForm } from "./PhonebookForm";

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(addContact(contact)),
});

const mapStateToProps = (state) => ({ contacts: state.phonebook.contacts });

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookForm);
