import { useEffect, useState } from "react";

const useWindowPosition = () => {
  const [atTheTop, setAtTheTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setAtTheTop(window.scrollY === 0);
    });

    return () => {
      window.removeEventListener("scroll", (e) => {
        setAtTheTop(window.scrollY === 0);
      });
    };
  }, []);

  return [atTheTop];
};

export default useWindowPosition;
