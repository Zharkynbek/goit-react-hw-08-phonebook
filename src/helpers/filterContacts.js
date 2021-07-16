const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
  });
};

export default filterContacts;
