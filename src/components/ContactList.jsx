import Contact from "./Contact";
import css from "./ContactList.module.css";
import { useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

const ContactList = ({ contacts, onDelete }) => {
  const parent = useRef([]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

    return contacts !== '' && (
        <ul className={css.contacts} ref={parent}>
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
