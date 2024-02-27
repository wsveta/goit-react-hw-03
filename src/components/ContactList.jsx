import Contact from "./Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete, reff }) => {
    return contacts !== '' && (
        <ul className={css.contacts} ref={reff}>
      {contacts.map((contact) => (
        <li className={css.contact} key={contact.id}>
          <Contact
            data={contact} onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
