import { PhonebookFilter } from "./PhonebookFilter";
import { connect } from "react-redux";
import * as actions from "../../../redux/contacts/phonebookActions";
import phonebookSelectors from "../../../redux/contacts/phonebookSelectors";

const mapStateToProps = (state) => ({
  filterValue: phonebookSelectors.getFilterValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterContact: (e) => dispatch(actions.handleFilterContacts(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookFilter);
