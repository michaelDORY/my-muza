import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import FavouriteButton from "../FavouriteButton";
import IconButton from "../IconButton";

const TrackCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleIsPlaying = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };
  return (
    <Link href="tracks/62b772100aca63ec6cee0994">
      <a>
        <div
          className="flex px-8 py-4 dark:bg-secondary-dark bg-secondary-light
    w-full justify-between items-center dark:shadow-light shadow-dark shadow-xl
    rounded-md"
        >
          <div className="flex items-center">
            <IconButton
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              active={isPlaying}
              color="bg-primary"
              width="w-10"
              height="h-10"
              onClick={toggleIsPlaying}
            />
            <div className="ml-3">
              <h4>Shivers</h4>
              <p>Ed Sheran</p>
            </div>
          </div>
          <p>Album</p>
          <div className="flex">
            <FavouriteButton isFavourite={true} />
            <p className="ml-3">3:05</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default TrackCard;
