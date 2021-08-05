import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Photos } from "./Photos";

export const FavoritePhotosContainer: React.FC<RouteComponentProps> = (
  props
) => {
  const photos = useAppSelector((state) =>
    state.photos.photos.filter((photo) => photo.liked_by_user)
  );

  return <Photos data={photos} />;
};
