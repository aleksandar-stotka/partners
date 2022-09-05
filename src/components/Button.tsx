import React from "react";

type ButtonProps = {
  onClick?: () => void;
  title?: string;
  type?: "submit" | "button";
};

const Button = ({ onClick, title, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {title}
    </button>
  );
};

export default Button;
