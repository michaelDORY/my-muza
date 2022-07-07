import React, { FC, MouseEvent, ReactElement } from "react";

interface Props {
  icon: ReactElement;
  active?: boolean;
  width?: string;
  color?: string;
  height?: string;
  styles?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: FC<Props> = (props) => {
  const { icon, width, height, color, onClick, active, styles } = props;
  return (
    <button
      type="button"
      className={`rainbow-button flex justify-center items-center rounded-3xl shadow-sm 
      shadow-primary hover:backdrop-saturate-200 transition-all ease-linear
       duration-150 ${width} ${height} ${color} ${styles} ${
        active && "active"
      }`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
