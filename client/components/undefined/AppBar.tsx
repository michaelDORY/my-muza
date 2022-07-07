import Image from "next/image";
import React, { FC, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Logo from "../../public/icon.png";
import IconButton from "../IconButton";
import ToggleMenuButton from "./ToggleMenuButton";

interface Props {
  style?: object;
  twStyles?: string;
}

const AppBar: FC<Props> = ({ style, twStyles }) => {
  return (
    <div
      className={`dark:bg-dark
    bg-light dark:shadow-dark shadow-light
    drop-shadow-sm shadow-xl ${twStyles}`}
      style={style}
    >
      <div className="container h-20 flex gap-x-10 items-center">
        <ToggleMenuButton />
        <Image
          src={Logo.src}
          height={50}
          width={50}
          alt="logo"
          className="object-contain z-0"
        />
      </div>
    </div>
  );
};

export default AppBar;
