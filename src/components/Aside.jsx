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
    <aside className="bg-[#efedfa] fixed left-0 h-full">
      <nav>
        <ul className="flex flex-col">
          <li>
            <NavLink
              className="flex items-center gap-3 px-6 py-3 bg-[#4575F4] text-white"
              to={"/user-list"}
            >
              <FaUserGroup fontSize={20} />
              <span>Lista de usuários</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-3 px-6 py-3"
              to={"/user-registration"}
            >
              <FaUserPlus fontSize={20} />
              <span>Cadastrar usuário</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-3 px-6 py-3"
              to={"/modify-user"}
            >
              <FaUserPen fontSize={20} />
              <span>Modificar usuário</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-3 px-6 py-3"
              to={"/remove-user"}
            >
              <FaUserPen fontSize={20} />
              <span>Remover usuário</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
