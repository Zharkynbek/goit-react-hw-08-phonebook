const getFilterValue = (state) => state.phonebook.filter;
const getContactList = (state) => state.contacts;

const selector = {
  getFilterValue,
  getContactList,
};
export default selector;
