import Link from "next/link";
import type { FC } from "react";
import React from "react";
import { CSSTransition } from "react-transition-group";

type NavbarProps = {
  // The navbar title
  title: string;
  // Flag indicating whether the navbar is open or closed
  isOpen: boolean;
  // Callback function to toggle the navbar open/closed state
  onToggle: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ title, isOpen, onToggle }) => {
  return (
    <nav className="sticky top-0 z-40 flex w-full items-center justify-between border-b border-b-gray-400 p-2 shadow">
      <Link className="text-2xl font-bold  text-gray-200" href={"/"}>
        {title}
      </Link>
      <button
        className="z-40 block text-gray-200 focus:outline-none md:hidden"
        onClick={onToggle}
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              fill="currentColor"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          ) : (
            <path
              fill="currentColor"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>
      <NavList />

      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="navbar-menu "
        unmountOnExit={true}
      >
        <NavMenu />
      </CSSTransition>
    </nav>
  );
};
const NavList = () => {
  return (
    <div className=" mx-3 mt-2  hidden w-2/12 items-center justify-around rounded-lg py-2 px-3 md:flex">
      <Link
        className="block px-4 py-2 text-gray-200 hover:text-gray-400"
        href="#"
      >
        About
      </Link>
      <Link
        className="block px-4 py-2 text-gray-200 hover:text-gray-400"
        href="#"
      >
        Contact
      </Link>
      <Link
        className="block px-4 py-2 text-gray-200 hover:text-gray-400"
        href="#"
      >
        SignUp
      </Link>
    </div>
  );
};

const NavMenu: FC = () => {
  return (
    <div className="absolute top-0 right-0 mt-2 w-64 rounded-lg bg-white py-2 shadow-xl dark:bg-gray-600">
      <Link
        className="block px-4 py-2 text-gray-200 hover:bg-blue-600/20"
        href="#"
      >
        Menu item 1
      </Link>
      <Link
        className="block px-4 py-2 text-gray-200 hover:bg-blue-600/20"
        href="#"
      >
        Menu item 2
      </Link>
      <Link
        className="block px-4 py-2 text-gray-200 hover:bg-blue-600/20"
        href="#"
      >
        Menu item 3
      </Link>
    </div>
  );
};

export default Navbar;
