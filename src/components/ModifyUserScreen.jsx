import React from "react";
import Users from "./Users";
import { useAppContext } from "../context/AppContext";

const ModifyUserScreen = () => {
  const { aside, readUsers, theme } = useAppContext();
  return (
    <div
      className={`${
        (aside && "ml-[13.25rem]") ||
        (readUsers.length >= 1 && "overflow-y-scroll")
      } 
      ${theme === "dark" && "bg-[#191919]"}
      h-full transition-all pb-[5rem]
      `}
    >
      <h2 className="bg-[#B2C7FF] px-6 py-3 text-[.92rem] uppercase font-semibold text-[#363636]">
        Modificar usuários
      </h2>
      <Users setUserTh={"Modificar"} setUserTd={"modify"} />
    </div>
  );
};

export default ModifyUserScreen;
