import React from "react";

const UserList = () => {
  return (
    <div className="ml-[13.39rem] h-full">
      <h2 className="bg-[#B2C7FF] px-6 py-3 text-[.92rem] uppercase font-semibold text-[#363636]">
        Lista de usuários
      </h2>
      <div className=" flex justify-center mt-[10rem]">
        <p className="text-[#363636]">
          Não há nenhum usuário cadastrado ainda...
        </p>
      </div>
    </div>
  );
};

export default UserList;
