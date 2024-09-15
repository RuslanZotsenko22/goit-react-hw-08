import css from "./Modal.module.css";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className={css.Overlay}>
      <div className={css.Content}>
        <p>Are you sure you want to delete the contact?</p>
        <button className={css.confirm} onClick={onConfirm}>
          Yes
        </button>
        <button className={css.cancel} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
};

export default Modal;
