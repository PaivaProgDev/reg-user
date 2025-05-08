import React from "react";
import Users from "./Users";

const ModifyUserScreen = () => {
  return (
    <div className="ml-[13.25rem] h-full">
      <h2 className="bg-[#B2C7FF] px-6 py-3 text-[.92rem] uppercase font-semibold text-[#363636]">
        Modificar usuários
      </h2>
      <Users setUserTh={"Modificar"} setUserTd={"modalModify"} />
    </div>
  );
};

export default ModifyUserScreen;
