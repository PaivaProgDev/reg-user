import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegUser, FaUserPlus, FaUserPen, FaPen } from "react-icons/fa6";
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
  } = useAppContext();

  return (
    <>
      <div
        className={`flex justify-center flex-col gap-4 items-center m-3 text-left overflow-hidden`}
      >
        {readUsers.length > 0 ? (
          <>
            {readUsers.map((user) => (
              <div
                key={user.id}
                className="text-[#353535] w-full max-w-[20rem] text-[13px] font-medium flex flex-col gap-0.5 border border-gray-400 rounded px-4 py-2"
              >
                <div className="flex gap-3 mt-[.7rem] justify-between">
                  <span className="font-semibold text-[16px]">
                    {user.data.name}
                  </span>
                  {setUserTd === "modify" && (
                    <FaPen
                      onClick={() => {
                        setUserIdModify(user.id);
                        setModifyName(user.data.name);
                        setModifyContact(user.data.contact);
                        setModifyCity(user.data.city);
                        setPlaceholder("Nome");
                        setChange("name");
                        setIcon(
                          <FaRegUser
                            strokeWidth={0.3}
                            fontSize={16}
                            className="text-[#4575F4]"
                          />
                        );

                        setModalModify(true);
                        setAside(false);
                      }}
                      className={"cursor-pointer"}
                    />
                  )}
                </div>
                <div className="flex flex-col mt-[.7rem]">
                  <span className="font-semibold text-[#171824]">Contato</span>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-normal">{user.data.contact}</span>
                    {setUserTd === "modify" && (
                      <FaPen
                        onClick={() => {
                          setUserIdModify(user.id);
                          setModifyName(user.data.name);
                          setModifyContact(user.data.contact);
                          setModifyCity(user.data.city);
                          setPlaceholder("Contato");
                          setChange("contact");
                          setIcon(
                            <BsTelephone
                              strokeWidth={0.3}
                              fontSize={16}
                              className="text-[#4575F4]"
                            />
                          );

                          setModalModify(true);
                          setAside(false);
                        }}
                        className={"cursor-pointer"}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col mt-[.7rem]">
                  <span className="font-semibold text-[#171824]">Cidade</span>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-normal">{user.data.city}</span>
                    {setUserTd === "modify" && (
                      <FaPen
                        onClick={() => {
                          setPlaceholder("Cidade");
                          setModifyName(user.data.name);
                          setModifyContact(user.data.contact);
                          setModifyCity(user.data.city);
                          setUserIdModify(user.id);
                          setChange("city");
                          setIcon(
                            <BsBuildings
                              strokeWidth={0.3}
                              fontSize={16}
                              className="text-[#4575F4]"
                            />
                          );

                          setModalModify(true);
                          setAside(false);
                        }}
                        className={"cursor-pointer"}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col mt-[.7rem]">
                  <span
                    className="font-semibold text-[#171824]
                  "
                  >
                    Data de registro
                  </span>
                  <span className="font-normal">{user.data.dateRegister}</span>
                </div>
                <div className=" text-[#353535] flex justify-between">
                  <div className="flex flex-col mt-1">
                    <span className="font-semibold">ID</span>
                    <span>{user.data.id}</span>
                  </div>
                  <div>
                    {setUserTd === "remove" && (
                      <Button
                        onClick={() => deleteUser(user.id)}
                        className={"mt-2 bg-red-400"}
                        content={<FaRegTrashAlt />}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col h-screen items-center mt-[10rem]">
            <p className="text-[#363636] text-[14px] ">
              Não há nenhum usuário cadastrado ainda...
            </p>
            <Link className="text-[13px]" to={"/user-registration"}>
              <Button
                className={"mt-8"}
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
    </>
  );
};

export default Users;
