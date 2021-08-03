import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Photos } from "./Photos";
import { like } from "./photosSlice";

export const FavoritePhotosContainer: React.FC<RouteComponentProps> = (
  props
) => {
  const { match } = props;
  const dispatch = useAppDispatch();
  const photos = useAppSelector((state) =>
    state.photos.photos.filter((photo) => photo.liked_by_user)
  );

  const handlePhotoLikeChange = (id: string) => {
    dispatch(like(id));
  };

  return (
    <Photos
      data={photos}
      path={match.path}
      onPhotoLikeChange={handlePhotoLikeChange}
    />
  );
};
