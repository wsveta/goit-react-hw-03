import "./App.css";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import ContactForm from "./ContactForm";
import { useState, useEffect } from "react";
import toast, {Toaster} from "react-hot-toast";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("saved-contacts"))
  );
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    toast('Contact has been successfully created!');
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (id) => {
    toast('Contact has been successfully deleted!');
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="content">
      <Toaster/>
      <div className="control-panel">
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
      </div>
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
