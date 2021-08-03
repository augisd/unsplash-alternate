import React, { ChangeEvent, MouseEvent, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchPhotos, like, Photo } from "./photosSlice";
import { Link, RouteComponentProps } from "react-router-dom";

export interface PhotosProps {
  data: Photo[];
  path: string;
  onPhotoLikeChange: (id: string) => void;
}

export const Photos = ({ data, path, onPhotoLikeChange }: PhotosProps) => {
  const renderedPhotos = data.map((photo) => (
    <figure key={photo.id}>
      <Link to={`${path}/${photo.id}`}>
        <img src={photo.urls.thumb} alt={photo.alt_description} />
      </Link>
      <label htmlFor={`like-${photo.id}`}>Like this photo</label>
      <input
        type="checkbox"
        id={`like-${photo.id}`}
        name={`like-${photo.id}`}
        checked={photo.liked_by_user}
        onChange={(e) => onPhotoLikeChange(photo.id)}
      ></input>
    </figure>
  ));

  return (
    <section>
      <h2>All photos</h2>
      {renderedPhotos}
    </section>
  );
};
