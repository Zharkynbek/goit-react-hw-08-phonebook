import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList";
import PhonebookFilter from "./PhonebookFilter";
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
  contacts: state.contacts,
  filter: state.filter,
});

export default connect(mapStateToProps)(Phonebook);
