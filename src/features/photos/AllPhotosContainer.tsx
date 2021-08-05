import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Photos } from "./Photos";

export const AllPhotosContainer: React.FC<RouteComponentProps> = (props) => {
  const photos = useAppSelector((state) => state.photos.photos);

  return <Photos data={photos} />;
};
