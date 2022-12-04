import clsx from "clsx";

import Logo from "./logo";
import useWindowPosition from "../../hooks/useWindowPosition";

const Header = () => {
  const [atTheTop] = useWindowPosition();

  return (
    <header className="fixed bg-transparent z-10 top-4 left-0 right-0 flex items-center justify-start h-16 md:px-10 px-5 pt-2 w-full">
      <div
        className={clsx(
          "flex items-center md:justify-start justify-between transition-all ease-in duration-300 w-full p-4 rounded-lg",
          {
            "bg-white shadow-md": !atTheTop,
          }
        )}
      >
        <div className="ml-1 translate-y-[2px]">
          <Logo />
        </div>

        <div className="w-52 items-center justify-between ml-10 hidden md:flex">
          <p>About</p>
          <p>Donate</p>
          <p>Contact</p>
        </div>

        <div className="md:invisible visible">Hamburger</div>
      </div>
    </header>
  );
};

export default Header;
