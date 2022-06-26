import Image from "next/image";
import React, { FC } from "react";
import Logo from "../public/icon.png";

interface Props {
  style?: object;
  twStyles?: string;
}

const AppBar: FC<Props> = ({ style, twStyles }) => {
  return (
    <header
      className={`flex justify-between h-16 p-4 dark:bg-dark
    bg-light container dark:shadow-dark shadow-light
    drop-shadow-sm shadow-xl ${twStyles}`}
      style={style}
    >
      <Image
        src={Logo.src}
        height={100}
        width={100}
        alt="logo"
        className="object-contain"
      />
    </header>
  );
};

export default AppBar;
