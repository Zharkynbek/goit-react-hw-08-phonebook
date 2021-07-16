const getFilterValue = (state) => state.filter;
const getContactList = (state) => state.contacts;

const selector = {
  getFilterValue,
  getContactList,
};
export default selector;
