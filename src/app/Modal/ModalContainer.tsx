import React from "react";
import { useLocation, useHistory } from "react-router";
import { Modal } from "./Modal";

export const ModalContainer: React.FC = ({ children }) => {
  const location = useLocation();
  const history = useHistory();

  const handleCloseClick = (): void => {
    history.replace({ search: "" });
  };

  let content;

  if (location.search) {
    content = <Modal onCloseClick={handleCloseClick}>{children}</Modal>;
  } else {
    content = null;
  }

  return content;
};
