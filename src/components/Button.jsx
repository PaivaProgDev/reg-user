const Button = ({ content, className, onClick, disabled, tabIndex }) => {
  return (
    <button
      className={`flex gap-2 items-center justify-center bg-[#4575F4] p-2  text-white rounded font-light cursor-pointer disabled:bg-slate-300 disabled:cursor-default ${className}`}
      value={"tetse"}
      onClick={onClick}
      disabled={disabled}
      tabIndex={tabIndex}
    >
      {content}
    </button>
  );
};

export default Button;
