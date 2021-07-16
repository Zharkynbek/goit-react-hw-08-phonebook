import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/phoenbookOperations";
import shortid from "shortid";

class PhonebookForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSetContact = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddContact = (e) => {
    e.preventDefault();
    if (this.props.contacts.some(({ name }) => name === this.state.name)) {
      alert(`${this.state.name} is already in contact`);
      return;
    }
    this.props.onAddContact({
      name: this.state.name,
      number: this.state.number,
      id: shortid.generate(),
    });
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.handleAddContact}>
          <label htmlFor="">
            <p>enter name</p>
            <input
              onInput={this.handleSetContact}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            <p>enter phone number</p>
            <input
              onInput={this.handleSetContact}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <br />
          <button>Add Contact</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(addContact(contact)),
});

export default connect(
  // null,
  (state) => ({ contacts: state.contacts }),
  mapDispatchToProps
)(PhonebookForm);
