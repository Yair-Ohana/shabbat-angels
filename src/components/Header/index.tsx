import clsx from "clsx";

import Logo from "./logo";
import useWindowPosition from "../../hooks/useWindowPosition";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [atTheTop] = useWindowPosition();

  return (
    <>
      <header className="fixed bg-transparent z-30 top-4 left-0 right-0 flex items-center justify-start h-16 md:px-10 px-5 pt-2 w-full">
        <div
          className={clsx(
            "flex items-center md:justify-start justify-between transition-all ease-in duration-200 w-full p-4 rounded-lg",
            {
              "bg-white": !atTheTop,
              "shadow-md": !isMenuOpen && !atTheTop,
            }
          )}
        >
          <div className="ml-1 translate-y-[4px]">
            <Logo />
          </div>

          <nav className="w-52 items-center justify-between ml-10 hidden md:flex">
            <p>About</p>
            <p>Donate</p>
            <p>Contact</p>
          </nav>

          <div className="md:invisible visible">
            {isMenuOpen ? (
              <button
                className="text-[25px] select-none"
                onClick={() => setIsMenuOpen(false)}
              >
                X
              </button>
            ) : (
              <button
                className="space-y-2 cursor-pointer flex items-center justify-center flex-col select-none"
                onClick={() => setIsMenuOpen(true)}
              >
                <div className="w-8 h-0.5 bg-black"></div>
                <div className="w-8 h-0.5 bg-black"></div>
                <div className="w-8 h-0.5 bg-black"></div>
              </button>
            )}
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className={
            "fixed flex z-20 top-0 right-0 left-0 bottom-0 bg-white items-center justify-center "
          }
        >
          <nav className="flex flex-col h-36 items-center justify-between text-xl">
            <p>About</p>
            <p>Donate</p>
            <p>Contact</p>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
