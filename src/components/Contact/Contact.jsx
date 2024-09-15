import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import Modal from "../Modal/Modal";
import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  return (
    <li className={css.list}>
      <div className={css.contactItem}>
        <FaUser className={css.icon} />
        <p className={css.cardName}>{name}</p>
      </div>
      <div className={css.contactItem}>
        <FaPhoneAlt className={css.icon} />
        <p className={css.cardNumber}>{number}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        Delete ❌
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </li>
  );
};

export default Contact;
