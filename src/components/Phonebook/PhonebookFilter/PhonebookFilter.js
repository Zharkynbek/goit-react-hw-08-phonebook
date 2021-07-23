export const PhonebookFilter = ({ filterValue, onFilterContact }) => {
  return (
    <>
      <div className="PhonebookFilter">
        <label>
          <p>filter contacts</p>
          <input
            type="text"
            name="filter"
            id=""
            value={filterValue}
            onInput={onFilterContact}
          />
        </label>
      </div>
      <h3>Contacts</h3>
    </>
  );
};
