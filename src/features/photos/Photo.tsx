import React from "react";
import { PhotoType } from "./photosSlice";

export interface PhotoProps {
  photo: PhotoType;
}

export const Photo: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <section>
      <img src={photo.urls.small} alt={photo.alt_description} />
    </section>
  );
};
