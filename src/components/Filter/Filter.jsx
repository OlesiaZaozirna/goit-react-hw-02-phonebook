export const Filter = ({ handleFindChange, state: { filter } }) => {
  const handleChange = e => {
    const inputValue = e.target.value;

    if (!validateName(inputValue)) {
      alert('Please enter a valid name for filtering');
      return;
    }

    handleFindChange(e);
  };

  const validateName = name => /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);

  return (
    <div>
      <label htmlFor="filter">Find contact by name</label>
      <input
        type="text"
        placeholder="search..."
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};