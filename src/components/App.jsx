import { Component } from 'react';
import { nanoid } from 'nanoid';

export const LoginForm = ({ onHandleSubmit, name, onHandleChange }) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <label>Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onHandleChange}
        />
        </label>
      <button type="submit">Login</button>
    </form>
  )
}

export const Section = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

export const ListUl = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  )
}

export const ListForm = ({newContact}) => {
  return (
    <>
      {newContact.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </>
  )
}

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, contacts } = this.state;
    const newContact = {
      name: name,
      id: nanoid()
    };
    this.setState({
      contacts: [...contacts, newContact],
      name: ''
    });
  }

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <Section title="Phonebook" />
        <LoginForm onHandleSubmit={this.handleSubmit} name={name} onHandleChange={this.handleChange} />
        <Section title="Contacts" />
        <ListUl>
          <ListForm newContact={contacts}/>
        </ListUl>
      </>
    )
  }
}