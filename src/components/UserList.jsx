import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "./Button";

const UserList = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("../../users.json");

      const data = await response.json();

      setUser(data);
    };

    getUsers();
  }, [user]);

  return (
    <div className="ml-[13.25rem] h-full">
      <h2 className="bg-[#B2C7FF] px-6 py-3 text-[.92rem] uppercase font-semibold text-[#363636]">
        Lista de usuários
      </h2>
      <div className=" flex justify-center flex-col items-center mt-[10rem]">
        {user ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Contato</th>
                  <th>Cidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    {user.name}
                    {user.email}
                    {user.contact}
                    {user.city}
                  </th>
                </tr>
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
