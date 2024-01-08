import css from "./ContactForm.module.css"

export const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const nameInput = e.target.elements.name;
    const numberInput = e.target.elements.number;

    if (!validateName(nameInput.value)) {
      alert('Please enter a valid name');
      return;
    }

    if (!validateNumber(numberInput.value)) {
      alert('Please enter a valid phone number');
      return;
    }

    const formData = {
      name: nameInput.value,
      number: numberInput.value,
    };

    handleAddContact(formData);
    e.target.reset();
  };

  const validateName = name => /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);

  const validateNumber = number =>
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(number);

  return (
    <div >
      <form className={css.FormContainer} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className={css.Input}
          type="text"
          placeholder="Contact name"
          name="name"
          id="name"
          required
        />

        <label htmlFor="number">Number</label>
        <input className={css.Input}
          type="tel"
          placeholder="Phone number"
          name="number"
          id="number"
          required
        />

        <button className={css.SubmitButton} type="submit">Add contact</button>
      </form>
    </div>
  );
};