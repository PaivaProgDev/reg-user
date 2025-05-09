import { useAppContext } from "../context/AppContext";
import Users from "./Users";

const UserList = () => {
  const { aside } = useAppContext();

  return (
    <div className={`${aside && "ml-[13.25rem] "} h-full transition-all`}>
      <h2 className="bg-[#B2C7FF] px-6 py-3 text-[.92rem] uppercase font-semibold text-[#363636]">
        Lista de usuários
      </h2>
      <Users />
    </div>
  );
};

export default UserList;
