import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaRegUser, FaUserPlus, FaPen, FaUserXmark } from "react-icons/fa6";
import { BsTelephone, BsBuildings } from "react-icons/bs";
import Modal from "./Modal";

const Users = ({ setUserTd }) => {
  const {
    readUsers,
    deleteUser,
    setModalModify,
    setUserIdModify,
    setAside,
    setIcon,
    setPlaceholder,
    setChange,
    setModifyName,
    setModifyContact,
    setModifyCity,
    theme,
  } = useAppContext();

  const handleModify = (user, field, placeholderText, iconElement) => {
    setUserIdModify(user.id);
    setModifyName(user.data.name);
    setModifyContact(user.data.contact);
    setModifyCity(user.data.city);
    setChange(field);
    setPlaceholder(placeholderText);
    setModalModify(true);
    setAside(false);
    setIcon(iconElement);
  };

  return (
    <div className="flex justify-center gap-4 p-4 w-full flex-wrap ">
      {readUsers.length > 0 ? (
        <>
          {readUsers.map((user) => (
            <div
              key={user.id}
              className={`${
                theme === "dark" &&
                "bg-[var(--bg-secondary-dark-color)] shadow-none border-transparent"
              } shadow-none" text-[#353535] w-full max-w-[18rem] text-[13px] shadow-md shadow-gray-400 font-medium flex flex-col justify-between gap-0.5 border border-gray-400 border-l-4 border-l-[var(--primary-color)] rounded px-4 py-2`}
            >
              <div className="flex gap-3 mt-[.7rem] justify-between">
                <span
                  className={`${
                    theme === "dark" && "text-[var(--text-dark-color)]"
                  } font-semibold text-[16px]`}
                >
                  {user.data.name}
                </span>
                {setUserTd === "modify" && (
                  <FaPen
                    onClick={() => {
                      handleModify(
                        user,
                        "name",
                        "Nome",
                        <FaRegUser
                          strokeWidth={0.3}
                          fontSize={16}
                          className="text-[var(--primary-color)]"
                        />
                      );
                    }}
                    onKeyDown={(e) => {
                      e.key === "Enter" &&
                        handleModify(
                          user,
                          "name",
                          "Nome",
                          <FaRegUser
                            strokeWidth={0.3}
                            fontSize={16}
                            className="text-[var(--primary-color)]"
                          />
                        );
                    }}
                    className={"cursor-pointer text-[var(--primary-color)]"}
                    tabIndex={1}
                  />
                )}
              </div>
              <div className="flex flex-col mt-[.7rem]">
                <span
                  className={`${
                    theme === "dark" && "text-slate-400"
                  } font-semibold text-[#171824]`}
                >
                  Contato
                </span>
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`${
                      theme === "dark" && "text-[var(--text-dark-color)]"
                    } font-normal`}
                  >
                    {user.data.contact}
                  </span>
                  {setUserTd === "modify" && (
                    <FaPen
                      onClick={() => {
                        handleModify(
                          user,
                          "contact",
                          "Contato",
                          <BsTelephone
                            strokeWidth={0.3}
                            fontSize={16}
                            className="text-[var(--primary-color)]"
                          />
                        );
                      }}
                      onKeyDown={(e) => {
                        e.key === "Enter" &&
                          handleModify(
                            user,
                            "contact",
                            "Contato",
                            <BsTelephone
                              strokeWidth={0.3}
                              fontSize={16}
                              className=" text-[var(--primary-color)]"
                            />
                          );
                      }}
                      className={"cursor-pointer text-[var(--primary-color)]"}
                      tabIndex={2}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col mt-[.7rem]">
                <span
                  className={`${
                    theme === "dark" && "text-slate-400"
                  } font-semibold `}
                >
                  <span
                    className={`${
                      theme === "dark" && "text-[var(--text-dark-color)]"
                    } font-normal text-[#171824]`}
                  ></span>
                  Cidade
                </span>
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`${
                      theme === "dark" && "text-[var(--text-dark-color)]"
                    } font-normal `}
                  >
                    {user.data.city}
                  </span>
                  {setUserTd === "modify" && (
                    <FaPen
                      onClick={() => {
                        handleModify(
                          user,
                          "city",
                          "Cidade",
                          <BsBuildings
                            strokeWidth={0.3}
                            fontSize={16}
                            className="text-[var(--primary-color)]"
                          />
                        );
                      }}
                      onKeyDown={(e) => {
                        e.key === "Enter" &&
                          handleModify(
                            user,
                            "city",
                            "Cidade",
                            <BsBuildings
                              strokeWidth={0.3}
                              fontSize={16}
                              className="text-[var(--primary-color)]"
                            />
                          );
                      }}
                      className={"cursor-pointer text-[var(--primary-color)]"}
                      tabIndex={3}
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-between items-start  mt-[.7rem]">
                <div className="flex flex-col">
                  <span
                    className={`
                        ${
                          theme === "dark" && "text-slate-400"
                        } font-semibold text-[#171824]`}
                  >
                    Registro
                  </span>
                  <span
                    className={`${
                      theme === "dark" && "text-[var(--text-dark-color)]"
                    } font-normal `}
                  >
                    {user.data.dateRegister.time}
                  </span>
                  <span
                    className={`${
                      theme === "dark" && "text-[var(--text-dark-color)]"
                    } font-normal `}
                  >
                    {user.data.dateRegister.date}
                  </span>
                </div>
                <div className="flex flex-col">
                  {user.data.modifyDate && (
                    <>
                      <span
                        className={`
                        ${
                          theme === "dark" && "text-slate-400"
                        } font-semibold text-[#171824]`}
                      >
                        Alteração
                      </span>
                      <span
                        className={`${
                          theme === "dark" && "text-[var(--text-dark-color)]"
                        } font-normal `}
                      >
                        {user.data.modifyDate.time}
                      </span>
                      <span
                        className={`${
                          theme === "dark" && "text-[var(--text-dark-color)]"
                        } font-normal `}
                      >
                        {user.data.modifyDate.date}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className=" text-[#353535] flex justify-between">
                <div className="flex flex-col mt-1">
                  <span
                    className={`
                        ${
                          theme === "dark" && "text-slate-400"
                        } font-semibold text-[#171824]`}
                  >
                    ID
                  </span>
                  <span
                    className={`${
                      theme === "dark" && "text-[var(--text-dark-color)]"
                    } font-normal `}
                  >
                    {user.data.id}
                  </span>
                </div>
                <div>
                  {setUserTd === "modify" && (
                    <Button
                      onClick={() => deleteUser(user.id)}
                      className={"mt-2 bg-red-400"}
                      content={<FaUserXmark />}
                      aria={"Botão para excluir o usuário."}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col h-screen items-center mt-[10rem] col-span-full">
          <p className="text-[#363636] text-[14px] mb-8">
            Não há nenhum usuário cadastrado ainda...
          </p>
          <Link className="text-[13px]" to={"/user-registration"}>
            <Button
              tabIndex={2}
              content={
                <>
                  <FaUserPlus fontSize={18} /> Cadastrar usuário
                </>
              }
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Users;
