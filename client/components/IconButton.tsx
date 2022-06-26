import React, { FC, MouseEventHandler, ReactElement } from "react";

interface Props {
  icon: ReactElement;
  width: string;
  color: string;
  height: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const IconButton: FC<Props> = (props) => {
  const { icon, width, height, color, onClick } = props;
  return (
    <button
      type="button"
      className={`rainbow-button flex justify-center items-center rounded-3xl shadow-sm 
      shadow-primary hover:backdrop-saturate-200 transition-all ease-linear
       duration-150 ${width} ${height} ${color}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
