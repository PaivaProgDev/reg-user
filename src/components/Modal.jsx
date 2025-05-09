import React from "react";
import Button from "./Button";
import { FaRegUser } from "react-icons/fa6";
import { BsTelephone, BsBuildings } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
const Modal = () => {
  const {
    name,
    contact,
    city,
    setName,
    setContact,
    setCity,
    modifyUser,
    setModalModify,
    userIdModify,
  } = useAppContext();
  return (
    <>
      <div
        onClick={() => setModalModify(false)}
        className="fixed flex justify-center z-10 top-0 left-0 bottom-0 right-0 w-full bg-[#000000d3]"
      >
        <form
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="flex flex-col m-3 h-fit w-full max-w-[30rem] border py-7 px-8 rounded border-gray-300 bg-white"
        >
          <div className="flex gap-7 items-center ">
            <div className="flex flex-col gap-4 w-full">
              <label className="w-full border-b-1 border-gray-300 text-[13px] ">
                <FaRegUser strokeWidth={0.3} fontSize={16} color="#4575F4" />
                <input
                  className=" mt-2 pl-[6px] text-[13px] text-[#3d3d3d] w-full"
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="w-full border-b-1 border-gray-300 text-[13px]">
                <BsTelephone strokeWidth={0.3} fontSize={16} color="#4575F4" />
                <input
                  pattern="^\d{2} \d{5}-\d{4}$"
                  className=" mt-2 pl-[6px] text-[#3d3d3d] w-full"
                  type="number"
                  placeholder="Contato"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </label>
              <label className="w-full border-b-1 border-gray-300 text-[13px]">
                <BsBuildings strokeWidth={0.3} fontSize={16} color="#4575F4" />
                <input
                  className=" mt-2 pl-[6px] text-[13px] text-[#3d3d3d] w-full"
                  type="text"
                  placeholder="Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
          </div>
          <Button
            onClick={() => modifyUser(userIdModify, name, contact, city)}
            content={"Modificar"}
            className="!mt-5"
            // disabled={
            //   city.length <= 3 || name.length <= 3 || contact.length <= 6
            // }
          />
        </form>
      </div>
    </>
  );
};

export default Modal;
