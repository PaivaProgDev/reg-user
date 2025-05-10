import React from "react";
import Users from "./Users";
import { useAppContext } from "../context/AppContext";

const RemoveUserScreen = () => {
  const { aside, readUsers } = useAppContext();

  return (
    <div
      className={`${aside && "ml-[13.25rem] "} h-full transition-all pb-[5rem] 
      ${readUsers.length >= 1 && "overflow-y-scroll"}`}
    >
      <h2 className="bg-[#B2C7FF] px-6 py-3 text-[.92rem] uppercase font-semibold text-[#363636]">
        Remover Usuários
      </h2>
      <Users setUserTh={"Remover"} setUserTd={"remove"} />
    </div>
  );
};

export default RemoveUserScreen;
