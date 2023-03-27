export const ContactList = ({ newContact, filter, onDeleteContact }) => {

  const filteredContacts = newContact.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>{contact.name}: {contact.number} <button onClick={() => onDeleteContact(contact.id)}>Delete</button></li>
      ))}
    </ul>
  )
}