import React, { useEffect, useState } from "react";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa6";
import { BsTelephone, BsBuildings } from "react-icons/bs";
import Button from "./Button";

const Form = () => {
  const [cityApi, setCityApi] = useState([]);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getCep = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/ap/v1/localidades/municipios"
        );

        if (!response.ok) throw new Error();

        const data = await response.json();

        setCityApi(data);
      } catch {
        setError("Houve um erro ao buscar as cidades, digite-a manualmente!");
      }
    };

    getCep();
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    setName("");
    setContact("");
    setEmail("");
    setCity("");
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col h-fit w-full max-w-[30rem] border py-7 px-8 rounded border-gray-300 "
    >
      <div className="flex gap-7 items-center ">
        <div className="flex flex-col gap-4 w-full">
          <label className="w-full border-b-1 border-gray-300 text-[13px]">
            <FaRegUser strokeWidth={0.3} fontSize={16} color="#4575F4" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className=" mt-2 pl-[6px] text-[13px] text-[#3d3d3d] w-full"
              type="text"
              placeholder="Nome"
              required
            />
          </label>

          <label className="w-full border-b-1 border-gray-300 text-[13px]">
            <FaRegEnvelope strokeWidth={0.3} fontSize={16} color="#4575F4" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" mt-2 pl-[6px] text-[13px] text-[#3d3d3d] w-full"
              type="email"
              placeholder="Email"
              required
            />
          </label>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <label className="w-full border-b-1 border-gray-300 text-[13px]">
            <BsTelephone strokeWidth={0.3} fontSize={16} color="#4575F4" />
            <input
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              className=" mt-2 pl-[6px] text-[#3d3d3d] w-full"
              type="number"
              placeholder="Contato"
              required
              minLength={5}
            />
          </label>

          <label className="w-full border-b-1 border-gray-300 text-[13px]">
            <BsBuildings strokeWidth={0.3} fontSize={16} color="#4575F4" />
            {!error ? (
              <select
                onChange={(e) => setCity(e.target.value)}
                className={`w-full mt-2 pl-[6px] focus:outline-slate-300 focus:outline-1 text`}
                required
              >
                <option value="">Sua cidade</option>
                {cityApi.map((cidades) => (
                  <option key={cidades.id} value={cidades.nome}>
                    {cidades.nome}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className=" mt-2 pl-[6px] text-[#3d3d3d] w-full"
                type="text"
                placeholder="Sua cidade"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required
              />
            )}
          </label>
        </div>
      </div>
      <p className="text-[13px] text-red-400 mt-5">{error}</p>
      <Button content={"Cadastrar"} disabled={!city || city.length <= 3} />
    </form>
  );
};

export default Form;
