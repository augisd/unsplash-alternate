import React from "react";

export interface ModalProps {
  onCloseClick: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onCloseClick }) => {
  const handleCloseClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onCloseClick();
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(255,255,255,0.5)",
      }}
    >
      <aside>
        <button onClick={handleCloseClick}>Close</button>
        {children}
      </aside>
    </div>
  );
};
