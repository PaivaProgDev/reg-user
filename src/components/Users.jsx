import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaUserPlus, FaUserPen } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const Users = ({ setUserTd }) => {
  const { readUsers, deleteUser, setModalModify, setUserIdModify, setAside } =
    useAppContext();

  return (
    <>
      <div
        className={`flex justify-center flex-col items-center m-3 text-left overflow-hidden`}
      >
        {readUsers.length > 0 ? (
          <>
            <div className="w-full max-w-[24rem] ">
              <div className="text-[13px] font-normal flex flex-col gap-3">
                {readUsers.map((user) => (
                  <div
                    key={user.id}
                    className="text-[#353535] font-medium flex flex-col border border-gray-400 rounded shadow-md shadow-gray-300 px-4 py-2"
                  >
                    <span className="py-2 px-4 text-[#353535] font-semibold">
                      {user.data.id}
                    </span>
                    <div>
                      <span>Nome</span>
                      {user.data.name}
                    </div>
                    <div>
                      <span>Contato</span>
                      {user.data.contact}
                    </div>
                    <span>{user.data.city}</span>
                    <span>{user.data.dateRegister}</span>
                    <span>
                      {(setUserTd === "remove" && (
                        <Button
                          onClick={() => deleteUser(user.id)}
                          className={"!mt-2 mb-2 bg-red-400"}
                          content={<FaRegTrashAlt />}
                        />
                      )) ||
                        (setUserTd === "modalModify" && (
                          <Button
                            onClick={() => {
                              setModalModify(true);
                              setUserIdModify(user.id);
                              setAside(false);
                            }}
                            className={"!mt-2 mb-2 bg-[#4575F4] "}
                            content={<FaUserPen />}
                          />
                        ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col h-screen items-center mt-[10rem]">
            <p className="text-[#363636] text-[14px] ">
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
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
