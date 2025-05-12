import { FaAngleDoubleRight } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import Toggle from "./Toggle";

const Header = () => {
  const { setAside, aside } = useAppContext();

  return (
    <header className="bg-[#191919] px-4 py-3 text-white w-full flex items-center justify-between  ">
      <FaAngleDoubleRight
        tabIndex={1}
        onClick={() => setAside(!aside)}
        onKeyDown={(e) => {
          e.key === "Enter" && setAside(true);
          e.key === "Escape" && setAside(false);
        }}
        color="white"
        className={`cursor-pointer text-[18px] transition ${
          aside && "rotate-180"
        }`}
      />
      <div className="flex items-center gap-5">
        <Toggle />
        <h1 className="text-2xl flex">
          <span className="font-extralight">Reg</span>
          <span className="font-semibold">User</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
1;
