import "./App.css";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import ContactForm from "./ContactForm";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts).filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return {};
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    toast("Contact has been successfully created!");
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (id) => {
    toast("Contact has been successfully deleted!");
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="content">
      <Toaster />
      <div className="control-panel">
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
      </div>
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
