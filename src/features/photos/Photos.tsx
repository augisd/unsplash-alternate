import React from "react";
import { PhotoType } from "./photosSlice";
import { Link } from "react-router-dom";
import { ReactComponent as LikedIndicator } from "../../app/icons/like_button_icon.svg";

export interface PhotosProps {
  data: PhotoType[];
}

export const Photos = ({ data }: PhotosProps) => {
  const renderedPhotos = data.map((photo) => (
    <figure key={photo.id} className="Photos__item">
      <Link
        className="Photos__link"
        to={(location) => `${location.pathname}?id=${photo.id}`}
      >
        <img
          className="Photos__image"
          src={photo.urls.small}
          alt={photo.alt_description}
        />
      </Link>

      {photo.liked_by_user && (
        <div className="Photos__liked-indicator">
          <LikedIndicator />
        </div>
      )}
    </figure>
  ));

  return (
    <section className="Photos">
      <h2 hidden>All photos</h2>
      {renderedPhotos}
    </section>
  );
};
