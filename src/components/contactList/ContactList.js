import PropTypes from "prop-types";

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

ContactList.propTypes = {
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
  newContact: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    number: PropTypes.string,
    }))
};