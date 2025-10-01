import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

// TODO: use Jotai or useContext or even Redux for state opening the navbar

export const SideMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <nav
        className={`fixed z-10 left-0 h-full w-[200px] bg-maxgreen transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-maxbeige text-xl"
        >
          ×
        </button>
      </nav>
    </>
  );
};

export const RoundButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="relative top-[-2.5] bg-maxred rounded-full p-5 shadow"
    >
      <HiOutlineMenuAlt4 className="text-maxbeige text-[2rem]" />
    </button>
  );
};
