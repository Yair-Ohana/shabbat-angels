import clsx from "clsx";

import useWindowPosition from "../../hooks/useWindowPosition";

const Header = () => {
  const [atTheTop] = useWindowPosition();

  return (
    <header className="fixed bg-transparent z-10 top-4 left-0 right-0 flex items-center justify-start h-16 px-10 pt-2 w-full">
      <div
        className={clsx(
          "flex items-center justify-start transition-all ease-in duration-300 w-full p-4 rounded-lg",
          {
            "bg-white shadow-md": !atTheTop,
          }
        )}
      >
        <p className="mr-4">Shabbat Angels</p>

        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
      </div>
    </header>
  );
};

export default Header;
