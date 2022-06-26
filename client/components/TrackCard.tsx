import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/all";
import FavouriteButton from "./FavouriteButton";
import IconButton from "./IconButton";

const TrackCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleIsPlaying = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <div
      className="flex px-10 py-6 dark:bg-secondary-dark bg-secondary-light
    w-full justify-between items-center dark:shadow-light shadow-dark shadow-xl
    rounded-md"
    >
      <div className="flex items-center">
        <IconButton
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          color="bg-primary"
          width="w-10"
          height="h-10"
          onClick={toggleIsPlaying}
        />
        <div className="ml-3">
          <h3>Shivers</h3>
          <h4>Ed Sheran</h4>
        </div>
      </div>
      <p>Album</p>
      <div className="flex">
        <FavouriteButton />
        <p className="ml-3">3:05</p>
      </div>
    </div>
  );
};

export default TrackCard;
