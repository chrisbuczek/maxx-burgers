import React from "react";

interface ISquareButton {
  children: React.ReactNode;
}

export const SquareButton: React.FC<ISquareButton> = ({ children }) => {
  return (
    <button className="bg-transparent border-2 border-maxred rounded-2xl">
      {children}
    </button>
  );
};

export const SquareButtonBack = () => {
  return <SquareButton>Back</SquareButton>;
};
