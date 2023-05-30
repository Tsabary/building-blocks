import React from 'react'

export interface StyledButtonProps{
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: (...args: any[]) => void;
  disabled?: boolean;
  full?: boolean;
  mt?: string;
}


function StyledButton({
  text,
  type,
  onClick,
  disabled,
  full,
  mt,
}:StyledButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${full && "w-full"} ${
        mt ?? ""
      } px-3 py-2.5 font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out select-none ${
        disabled
          ? "bg-gray-500 text-gray-300 cursor-default"
          : "bg-emerald-400 hover:bg-emerald-500 focus:bg-emerald-500 active:bg-emerald-600 text-white"
      }`}
    >
      {text}
    </button>
  );
}

export default StyledButton