import React, { MouseEventHandler } from "react";
import { ReactComponent as LikeButtonIcon } from "../../app/icons/like_button_icon.svg";

export interface LikeButtonProps {
  onClick: MouseEventHandler;
  checked: boolean;
  label: string | null;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  onClick,
  checked,
  label = null,
}) => {
  return (
    <div
      className={checked ? "LikeButton LikeButton--active" : "LikeButton"}
      onClick={onClick}
    >
      <LikeButtonIcon width="16px" height="16px" />
      {label && <span className="LikeButton__label">{label}</span>}
    </div>
  );
};
