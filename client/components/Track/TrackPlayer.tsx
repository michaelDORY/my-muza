import React, { MouseEvent, useState } from "react";
import { FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";
import FavouriteButton from "../FavouriteButton";
import IconButton from "../IconButton";

const TrackPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleIsPlaying = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="fixed bottom-0 w-3xl left-1/2 -translate-x-1/2">
      <div
        className="active-gradient flex gap-x-10 h-24 px-10 py-6
    w-full justify-between items-center dark:shadow-light shadow-dark shadow-xl
    rounded-md"
      >
        <div className="flex gap-x-8 items-center">
          <IconButton
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            active={isPlaying}
            color="bg-primary"
            width="w-10"
            height="h-10"
            onClick={toggleIsPlaying}
          />
          <div className="text-white font-bold">
            <h4>Shivers</h4>
            <p>Ed Sheran</p>
          </div>
        </div>
        <div className="flex">
          <input type="range" className="w-52" />
          <p className="ml-3">3:05</p>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-x-4 items-center">
            <FaVolumeUp />
            <input type="range" className="w-20" />
          </div>
          <FavouriteButton isFavourite={true} />
        </div>
      </div>
    </div>
  );
};

export default TrackPlayer;
