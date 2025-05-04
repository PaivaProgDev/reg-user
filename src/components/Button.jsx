import React from "react";

const Button = ({ content, className, onClick, disabled }) => {
  return (
    <button
      className={`flex gap-2 items-center justify-center bg-[#4575F4] px-4 py-2 text-white rounded font-light mt-6 cursor-pointer disabled:bg-slate-300 disabled:cursor-default ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
