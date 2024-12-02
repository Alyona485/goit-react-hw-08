import { FaUser } from 'react-icons/fa6';
import { GiPhone } from 'react-icons/gi';
import { TiDelete } from 'react-icons/ti';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={s.contactCard}>
      <div className={s.nameNumber}>
        <div className={s.contactField}>
          <FaUser className={s.icon} />
          <p>{contact.name}</p>
        </div>
        <div className={s.contactField}>
          <GiPhone className={s.icon} />
          <p>{contact.number}</p>
        </div>
      </div>
      <button className={s.btn} type="button" onClick={() => handleDelete()}>
        <TiDelete className={s.icon} />
        Delete
      </button>
    </li>
  );
};

export default Contact;
