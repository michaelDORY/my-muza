import Link from "next/link";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import IconButton from "../IconButton";

interface Props {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const NAV_ITEMS = [
  { href: "/tracks", title: "Tracks" },
  { href: "/albums", title: "Albums" },
];

const Menu: FC<Props> = (props) => {
  const { isMenuOpen, closeMenu } = props;
  console.log(isMenuOpen);
  return (
    <div
      className={`fixed z-50 left-0 top-0 bottom-0 md:w-1/4 sm:w-52
      bg-transparent backdrop-blur-md dark:backdrop-brightness-150 backdrop-brightness-50 
      drop-shadow-2xl dark:shadow-dark shadow-light shadow-2xl rounded-tr-md rounded-br-md
      transition-all duration-200 ease-in-out
      ${!isMenuOpen && "-left-full"}`}
    >
      <IconButton
        styles={`mx-auto my-6`}
        icon={
          <IoMdArrowRoundBack
            size={50}
            className="stroke-white"
            color="white"
          />
        }
        // color='bg-transparent'
        onClick={closeMenu}
      />
      <ul className="text-white text-center font-bold text-lg flex flex-col gap-y-4 px-12 py-6">
        {NAV_ITEMS.map((item) => (
          <li key={item.title} className={`bg-primary rounded-md`}>
            <Link href={item.href}>
              <a className="py-5 block menu-link" onClick={closeMenu}>
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
