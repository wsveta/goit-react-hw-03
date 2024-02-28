import "./App.css";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import ContactForm from "./ContactForm";
import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import autoAnimate from "@formkit/auto-animate";

function App() {
  const [filter, setFilter] = useState("");
  const parent = useRef([]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return "";
  });

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    toast("Contact has been successfully created!", { duration: 1500 });
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (id) => {
    toast("Contact has been successfully deleted!", { duration: 1500 });
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
      <ContactList
        reff={parent}
        contacts={visibleContacts}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;
