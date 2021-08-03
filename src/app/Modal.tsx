import React from "react";

export interface ModalProps {
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const handleOnCloseClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    onClose();
  };

  return (
    <aside>
      <button onClick={handleOnCloseClick}>Close</button>
      {children}
    </aside>
  );
};
