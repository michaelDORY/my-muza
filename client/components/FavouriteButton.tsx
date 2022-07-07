import React, { FC } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
  isFavourite: boolean;
  size?: number;
}
const FavouriteButton: FC<Props> = (props) => {
  const { isFavourite, size = 30 } = props;
  return (
    <button>
      {isFavourite ? (
        <FaHeart className="fill-primary" size={size} />
      ) : (
        <FaRegHeart size={size} />
      )}
    </button>
  );
};

export default FavouriteButton;
