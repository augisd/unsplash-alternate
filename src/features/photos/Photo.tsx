import React from "react";
import { LikeButton } from "./LikeButton";
import { PhotoDetailsType } from "./photoDetailsSlice";

export interface PhotoProps {
  photo: PhotoDetailsType;
  onLikeButtonClick: (id: string) => void;
  likedByUser: boolean;
}

export const Photo: React.FC<PhotoProps> = ({
  photo,
  onLikeButtonClick,
  likedByUser,
}) => {
  return (
    <section className="Photo">
      <img
        className="Photo__image"
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
      <article className="Photo__details">
        <LikeButton
          label={likedByUser ? "Unlike" : "Like"}
          checked={likedByUser}
          onClick={(e) => onLikeButtonClick(photo.id)}
        />
        {photo.description && (
          <h3 className="Photo__details__title">{photo.description}</h3>
        )}
        <div className="Photo__details__user">
          <img
            className="Photo__details__user__avatar"
            src={photo.user.profile_image.small}
            alt="user avatar"
          />
          <span className="Photo__details__user__name">{photo.user.name}</span>
        </div>
        <div className="Photo__details__camera-details">
          <div className="Photo__details__camera-details__item">
            <span className="Photo__details__camera-details__item__label">
              Camera make
            </span>
            <span className="Photo__details__camera-details__item__value">
              {photo.exif.make}
            </span>
          </div>
          <div className="Photo__details__camera-details__item">
            <span className="Photo__details__camera-details__item__label">
              Camera model
            </span>
            <span className="Photo__details__camera-details__item__value">
              {photo.exif.model}
            </span>
          </div>
          <div className="Photo__details__camera-details__item">
            <span className="Photo__details__camera-details__item__label">
              Focal length
            </span>
            <span className="Photo__details__camera-details__item__value">
              {photo.exif.focal_length}
            </span>
          </div>
          <div className="Photo__details__camera-details__item">
            <span className="Photo__details__camera-details__item__label">
              Aperture
            </span>
            <span className="Photo__details__camera-details__item__value">
              {photo.exif.aperture}
            </span>
          </div>
          <div className="Photo__details__camera-details__item">
            <span className="Photo__details__camera-details__item__label">
              Shutter speed
            </span>
            <span className="Photo__details__camera-details__item__value">
              {photo.exif.exposure_time}
            </span>
          </div>
          <div className="Photo__details__camera-details__item">
            <span className="Photo__details__camera-details__item__label">
              ISO
            </span>
            <span className="Photo__details__camera-details__item__value">
              {photo.exif.iso}
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};
