import { useEffect } from "react";
import filterContacts from "../../../helpers/filterContacts";

export const PhonebookList = ({
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
          <button onClick={() => onDeleteContact(id)} className="btnDelete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
