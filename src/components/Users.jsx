import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaUserPlus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const Users = ({ setUserTh, setUserTd }) => {
  const { readUsers } = useAppContext();
  const { removeUsers } = useAppContext();

  return (
    <>
      <div className=" flex justify-center flex-col items-center mt-[10rem] text-left">
        {readUsers.length > 0 ? (
          <>
            <table className="w-full max-w-[50rem] ">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-[#ede8f8]">ID</th>
                  <th className="bg-[#ede8f8]">Nome</th>
                  <th className="bg-[#ede8f8]">Contato</th>
                  <th className="bg-[#ede8f8]">Cidade</th>
                  <th className="bg-[#ede8f8]">Registro</th>
                  <th className="bg-[#ede8f8]">{setUserTh}</th>
                </tr>
              </thead>
              <tbody className="text-[13px] font-normal">
                {readUsers.map((user) => (
                  <tr key={user.id} className="text-[#353535] font-medium">
                    <td className="py-2 px-4 text-[#353535] font-semibold">
                      {user.data.id}
                    </td>
                    <td>{user.data.name}</td>
                    <td>{user.data.contact}</td>
                    <td>{user.data.city}</td>
                    <td>{user.data.dateRegister}</td>
                    <td>
                      {setUserTd === "remove" && (
                        <Button
                          onClick={() => removeUsers(user.id)}
                          className={"!mt-2 mb-2 bg-red-400"}
                          content={<FaRegTrashAlt />}
                        />
                      )}
                    </td>
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
    </>
  );
};

export default Users;
