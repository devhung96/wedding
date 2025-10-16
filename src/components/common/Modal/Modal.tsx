import React from "react";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  showCloseButton = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {showCloseButton && (
          <>
            <button className="close-button-top" onClick={onClose}>
              &times;
            </button>
          </>
        )}
        <h2 className="modal-title">{title}</h2>
        {description && <p className="modal-description">{description}</p>}
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
