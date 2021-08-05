import React from "react";
import { ReactComponent as CloseIcon } from "../icons/modal_close_icon.svg";

export interface ModalProps {
  onCloseClick: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onCloseClick }) => {
  const handleCloseClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onCloseClick();
  };

  return (
    <aside className="Modal">
      <div className="Modal__overlay">
        <div className="Modal__body">
          <button className="Modal__close-button" onClick={handleCloseClick}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    </aside>
  );
};
