import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setAside, aside } = useAppContext();

  return (
    <header className="bg-[#191919] px-4 py-3 text-white flex items-center w-full">
      <FaAngleDoubleRight
        tabIndex={1}
        onClick={() => setAside(!aside)}
        onKeyDown={(e) => {
          e.key === "Enter" && setAside(true);
          e.key === "Escape" && setAside(false);
        }}
        color="white"
        className={`cursor-pointer text-[18px] transition   ${
          aside && "rotate-180"
        }`}
      />

      <h1 className="text-2xl flex w-full justify-end">
        <span className="font-extralight">Reg</span>
        <span className="font-semibold">User</span>
      </h1>
    </header>
  );
};

export default Header;
1;
