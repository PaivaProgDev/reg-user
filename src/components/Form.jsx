import React, { useEffect, useState } from "react";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa6";
import { BsTelephone, BsBuildings } from "react-icons/bs";
import Button from "./Button";
import { useAppContext } from "../context/AppContext";
import { useAuthContext } from "../context/AuthContext";

const Form = () => {
  const {
    name,
    contact,
    city,
    setName,
    setContact,
    setCity,
    createUser,
    theme,
    setIsLogged,
  } = useAppContext();

  const { signOutUser } = useAuthContext();

  return (
    <form
      onSubmit={createUser}
      className={`
        ${
          theme === "dark" &&
          "bg-[var(--bg-secondary-dark-color)] shadow-none border-0 placeholder:text-white"
        }
        flex flex-col h-fit w-full max-w-[30rem] border py-7 px-8 rounded border-gray-300 shadow-md shadow-gray-300`}
    >
      <div className="flex gap-7 items-center ">
        <div className="flex flex-col gap-4 w-full">
          <label
            className={`${
              theme === "dark" && "border-b-[#5e5e5e]"
            } w-full border-b-1 border-gray-300 text-[13px]`}
          >
            <FaRegUser
              className="text-[var(--primary-color)]"
              strokeWidth={0.3}
              fontSize={16}
            />
            <input
              tabIndex={3}
              onChange={(e) => setName(e.target.value)}
              value={name}
              className={`
                ${
                  theme === "dark" &&
                  "placeholder:text-gray-600 text-[var(--text-dark-color)]"
                }
                mt-2 pl-[6px] text-[13px] text-[#3d3d3d] w-full
                `}
              type="text"
              placeholder="Nome"
              // required
            />
          </label>
          <label
            className={`${
              theme === "dark" && "border-b-[#5e5e5e]"
            } w-full border-b-1 border-gray-300 text-[13px]`}
          >
            <BsTelephone
              className="text-[var(--primary-color)]"
              strokeWidth={0.3}
              fontSize={16}
            />
            <input
              tabIndex={4}
              pattern="^\d{2} \d{5}-\d{4}$"
              onChange={(e) => setContact(parseInt(e.target.value))}
              value={contact}
              className={`
                ${
                  theme === "dark" &&
                  "placeholder:text-gray-600 text-[var(--text-dark-color)]"
                }
                mt-2 pl-[6px] text-[13px] text-[#3d3d3d] w-full
                `}
              type="number"
              placeholder="Contato"
              // required
            />
          </label>
          <label
            className={`${
              theme === "dark" && "border-b-[#5e5e5e]"
            } w-full border-b-1 border-gray-300 text-[13px]`}
          >
            <BsBuildings
              className="text-[var(--primary-color)]"
              strokeWidth={0.3}
              fontSize={16}
            />
            <input
              tabIndex={5}
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className={`
                ${
                  theme === "dark" &&
                  "placeholder:text-gray-600 text-[var(--text-dark-color)]"
                }
                mt-2 pl-[6px] text-[13px] text-[#3d3d3d] w-full
                `}
              type="text"
              placeholder="Cidade"
              // required
            />
          </label>
        </div>
      </div>
      <Button
        tabIndex={5}
        content={"Cadastrar"}
        className="!mt-5 bg-[var(--primary-color)]"
        // disabled={
        //   city.length <= 3 ||
        //   name.length <= 3 ||
        //   contact.length <= 6
        // }
      />
      <button onClick={signOutUser}>Deslogar</button>
    </form>
  );
};

export default Form;
