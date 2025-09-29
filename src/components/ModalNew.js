// components/Modal.js
import { useEffect } from 'react';

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <>
   
    <div className={"modalOverlay"} onClick={onClose}>
      <div className={"modalContent"} onClick={(e) => e.stopPropagation()}>
        {/* <button className={"closeButton"} onClick={onClose}>
          &times;
        </button> */}
        {children}
      </div>
    </div>
    </>
  );
};

export default Modal;
