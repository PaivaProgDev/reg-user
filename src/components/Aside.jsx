import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserGroup,
  FaUserPlus,
  FaUserPen,
  FaUserXmark,
} from "react-icons/fa6";

const Aside = () => {
  return (
    <aside className="bg-[#efedfa] absolute left-0 h-full ">
      <nav>
        <ul className="flex flex-col">
          <li>
            <NavLink
              to={"/"}
              className={({
                isActive,
              }) => `flex items-center gap-3 px-6 py-3 text-[.92rem] text-[#363636]
              ${isActive ? "bg-[#4575F4] text-white" : ""}`}
            >
              <FaUserGroup fontSize={18} />
              <span>Lista de usuários</span>
            </NavLink>
          </li>
          <li>
            <NavLink
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
          <li>
            <NavLink
              to={"/remove-user"}
              className={({
                isActive,
              }) => `flex items-center gap-3 px-6 py-3 text-[.92rem] text-[#363636]
              ${isActive ? "bg-[#4575F4] text-white" : ""}`}
            >
              <FaUserXmark fontSize={18} />
              <span>Remover usuário</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
