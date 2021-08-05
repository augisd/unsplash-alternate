import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useLocation } from "react-router";
import { like } from "./photosSlice";
import { fetchPhoto } from "./photoDetailsSlice";
import { Photo } from "./Photo";

export const PhotoContainer: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const photoId = new URLSearchParams(location.search).get("id");
  const photoDetails = useAppSelector((state) => state.details);
  const likedByUser = useAppSelector((state) =>
    state.photos.photos.some(
      (photo) => photo.id === photoId && photo.liked_by_user
    )
  );

  useEffect(() => {
    if (photoId) {
      dispatch(fetchPhoto(photoId));
    }
    // eslint-disable-next-line
  }, []);

  let content;

  if (photoDetails.details && photoDetails.details.id === photoId) {
    const handleLikeButtonClick = (id: string) => {
      dispatch(like(id));
    };

    content = (
      <Photo
        photo={photoDetails.details}
        onLikeButtonClick={handleLikeButtonClick}
        likedByUser={likedByUser}
      />
    );
  } else {
    content = null;
  }

  return content;
};
