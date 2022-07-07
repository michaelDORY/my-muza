import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import IconButton from "../IconButton";
import Menu from "./Menu";

const ToggleMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleCloseMenu() {
    setIsMenuOpen(false);
  }
  function handleOpenMenu() {
    setIsMenuOpen(true);
  }
  return (
    <>
      <IconButton
        icon={<HiOutlineMenuAlt1 size={50} className="stroke-white" />}
        onClick={handleOpenMenu}
      />
      <Menu isMenuOpen={isMenuOpen} closeMenu={handleCloseMenu} />
    </>
  );
};

export default ToggleMenuButton;
