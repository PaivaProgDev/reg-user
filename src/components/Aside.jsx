import { NavLink } from "react-router-dom";
import {
  FaUserGroup,
  FaUserPlus,
  FaUserPen,
  FaUserXmark,
} from "react-icons/fa6";

import { useAppContext } from "../context/AppContext";

const Aside = ({}) => {
  const { aside, checkClick } = useAppContext();
  return (
    <>
      <aside
        className={`bg-[#efedfa] absolute transition-all w-full sm:w-auto -left-full h-full z-20 ${
          aside && "left-0 "
        }`}
      >
        <nav>
          <ul className="flex flex-col">
            <li>
              <NavLink
                onClick={checkClick}
                to={"/"}
                className={({
                  isActive,
                }) => `flex items-center gap-3 px-6 py-3 text-[.92rem] text-[#363636] sm:${aside}
              ${isActive ? "bg-[#4575F4] text-white" : ""}`}
              >
                <FaUserGroup fontSize={18} />
                <span>Lista de usuários</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={checkClick}
                to={"/user-registration"}
                className={({
                  isActive,
                }) => `flex items-center gap-3 px-6 py-3 text-[.92rem] text-[#363636]
              ${isActive ? "bg-[#4575F4] text-white" : ""}`}
              >
                <FaUserPlus fontSize={18} />
                <span>Cadastrar usuário</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={checkClick}
                to={"/modify-user"}
                className={({
                  isActive,
                }) => `flex items-center gap-3 px-6 py-3 text-[.92rem] text-[#363636]
              ${isActive ? "bg-[#4575F4] text-white" : ""}`}
              >
                <FaUserPen fontSize={18} />
                <span>Modificar usuário</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
