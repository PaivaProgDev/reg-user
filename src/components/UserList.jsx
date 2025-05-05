import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAppContext } from "../context/AppContext";

const UserList = () => {
  const { users } = useAppContext();

  return (
    <div className="ml-[13.25rem] h-full">
      <h2 className="bg-[#B2C7FF] px-6 py-3 text-[.92rem] uppercase font-semibold text-[#363636]">
        Lista de usuários
      </h2>
      <div className=" flex justify-center flex-col items-center mt-[10rem] text-left">
        {users ? (
          <>
            <table className="w-full max-w-[50rem] ">
              <thead>
                <tr>
                  <th className="py-2 px-4">ID</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Contato</th>
                  <th>Cidade</th>
                </tr>
              </thead>
              <tbody className="text-[13px] font-normal">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="py-2 px-4">{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.contact}</td>
                    <td>{user.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <p className="text-[#363636] text-[14px] mb-[2rem]">
              Não há nenhum usuário cadastrado ainda...
            </p>
            <Link className="text-[13px]" to={"/user-registration"}>
              <Button
                content={
                  <>
                    <FaUserPlus fontSize={18} /> Cadastrar usuário
                  </>
                }
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default UserList;
