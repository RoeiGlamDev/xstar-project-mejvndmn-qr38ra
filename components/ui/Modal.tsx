import React from 'react';
import './Modal.css'; // Assuming you have a CSS file for styling

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Return null if modal is not open

  return (
    <div className="modal-overlay"> {/* Overlay for the modal */}
      <div className="modal-content"> {/* Modal content */}
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">X</button> {/* Close button */}
        </div>
        <div className="modal-body">
          {children} {/* Modal body content */}
        </div>
      </div>
    </div>
  );
};

export default Modal;