import { useEffect, useState } from "react";

export const LogoNavbar = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 w-full mx-auto h-24 z-2 bg-gradient-to-b from-maxbeige to-transparent z-10 transition-transform duration-200 ease-in-out ${
        scrollDirection === "down" ? "-translate-y-[200px]" : "translate-y-0"
      }`}
    >
      <div className="flex flex-row w-full] justify-center">
        <div className="w-[50%]">
          <img src={"/max.svg"} className="max-h-35 ml-2 pt-4 w-full" />
        </div>
      </div>
    </div>
  );
};
