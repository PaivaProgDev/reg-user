import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { FaMoon, FaLightbulb } from "react-icons/fa";

const Toggle = () => {
  const { theme, handleToggleTheme } = useAppContext();

  const [toggleActivated, setToggleActivated] = useState(false);

  return (
    <div
      onClick={() => {
        handleToggleTheme();
        setToggleActivated(!toggleActivated);
      }}
      className="z-20 slider overflow-hidden cursor-pointer rounded-full relative w-[56px] h-[26px] bg-slate-700 "
    >
      <FaLightbulb className="absolute left-[6px] bottom-[5px] z-[1]" />
      <FaMoon className="absolute bottom-[5px] right-[6.5px] z-[1]" />
      <button
        className={`${
          theme === "dark" && "left-[31px]"
        } slider-button rounded-[50px] w-[22px] h-[22px] pointer-events-none bg-[var(--primary-color)] transition-all absolute bottom-[2px] left-[3px] `}
      ></button>
    </div>
  );
};

export default Toggle;
