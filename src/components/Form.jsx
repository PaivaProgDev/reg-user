import React from "react";
import { FaTreeCity, FaRegEnvelope, FaRegUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Form = () => {
  return (
    <form className="flex flex-col w-full max-w-[32rem] border">
      <div className="flex">
        <div>
          <label>
            <FaRegUser />
            <input type="text" placeholder="Nome" />
          </label>
          <label>
            <FaRegEnvelope />
            <input type="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
            <FaTreeCity />
            <input type="number" placeholder="Contato" />
          </label>
          <label>
            <FaPhoneAlt />
            <input type="text" placeholder="Cidade" />
          </label>
        </div>
      </div>
      <button>Cadastrar</button>
    </form>
  );
};

export default Form;
