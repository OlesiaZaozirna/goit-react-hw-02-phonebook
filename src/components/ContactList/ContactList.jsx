

export const ContactList = ({ handleDeleteContact, state }) => {
  return (
    <ul>
      {state.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => handleDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};