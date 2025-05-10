import React from "react";
import Button from "./Button";
import { FaRegUser } from "react-icons/fa6";
import { BsTelephone, BsBuildings } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
const Modal = () => {
  const {
    modifyUser,
    setModalModify,
    userIdModify,
    icon,
    placeholder,
    change,
    setModifyName,
    setModifyContact,
    setModifyCity,
  } = useAppContext();

  const submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={() => setModalModify(false)}
        className="fixed flex justify-center items-center z-10 top-0 left-0 bottom-0 right-0 w-full bg-[#000000d3]"
      >
        <form
          onClick={submitForm}
          className="flex flex-col m-3 h-fit w-full max-w-[30rem] border py-7 px-8 rounded border-gray-300 bg-white"
        >
          <label className="w-full border-b-1 border-gray-300 text-[13px] ">
            {icon}
            <input
              className=" mt-2 pl-[6px] text-[13px] text-[#3d3d3d] w-full"
              placeholder={placeholder}
              onChange={(e) => {
                (change === "name" && setModifyName(e.target.value)) ||
                  (change === "contact" && setModifyContact(e.target.value)) ||
                  (change === "city" && setModifyCity(e.target.value));
              }}
            />
          </label>

          <Button
            onClick={() => {
              modifyUser(userIdModify);
            }}
            content={"Modificar"}
            className="!mt-5"
          />
        </form>
      </div>
    </>
  );
};

export default Modal;
