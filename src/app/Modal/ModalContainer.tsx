import React from "react";
import { useLocation, useHistory } from "react-router";
import { Modal } from "./Modal";
import { useAppSelector } from "../hooks";
import { Photo } from "../../features/photos/Photo";

export const ModalContainer: React.FC = (props) => {
  const location = useLocation();
  const history = useHistory();
  const useQuery = () => new URLSearchParams(location.search);
  const query = useQuery();

  const handleCloseClick = (): void => {
    history.replace({ search: "" });
  };

  const photoId = query.get("id");
  const photo = useAppSelector((state) =>
    state.photos.photos.find((photo) => photo.id === photoId)
  );

  let content;

  if (photo) {
    content = (
      <Modal onCloseClick={handleCloseClick}>
        <Photo photo={photo} />
      </Modal>
    );
  } else {
    content = null;
  }

  return content;
};
