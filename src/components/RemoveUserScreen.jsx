import React from "react";
import Users from "./Users";

const RemoveUserScreen = () => {
  return (
    <div className="ml-[13.25rem] h-full">
      <h2 className="bg-[#B2C7FF] px-6 py-3 text-[.92rem] uppercase font-semibold text-[#363636]">
        Remover Usuários
      </h2>
      <Users setUserTh={"Remover"} setUserTd={"remove"} />
    </div>
  );
};

export default RemoveUserScreen;
