import css from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={css.contact}>
      <div className={css.info}>
        <div className={css.iconText}>
          <FontAwesomeIcon icon={faUser} className={css.icon} />
          <span className={css.name}>{contact.name}</span>
        </div>
        <div className={css.iconText}>
          <FontAwesomeIcon icon={faPhone} className={css.icon} />
          <span className={css.number}>{contact.number}</span>
        </div>
      </div>
      <button
        className={`${css.deleteButton} button`}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
