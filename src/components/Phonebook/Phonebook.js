import PhonebookForm from "./PhonebookForm/PhonebookForm.container";
import PhonebookList from "./PhonebookList/PhonebookList.container";
import PhonebookFilter from "./PhonebookFilter/PhonebookFilter.container";
import { connect } from "react-redux";

function Phonebook({ contacts, filter }) {
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm />
      {(contacts.length > 1 || filter !== "") && <PhonebookFilter />}
      <PhonebookList />
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});

export default connect(mapStateToProps)(Phonebook);
