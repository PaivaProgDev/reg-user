import Users from "../Users";
import { useAppContext } from "../../context/AppContext";

const ModifyUserScreen = () => {
  const { aside, readUsers, theme } = useAppContext();
  return (
    <div
      className={`${
        (aside && "ml-[13.25rem]") ||
        (readUsers.length >= 1 && "overflow-y-scroll")
      } 
      h-full transition-all pb-[5rem]
      `}
    >
      <h2
        className={`${
          theme === "dark" &&
          "border-b-1 border-b-[#4b4b4b] !bg-[var(--bg-secondary-dark-color)] text-white"
        } bg-[var(--primary-color)] opacity-[.7] px-6 py-3 text-[.92rem] uppercase font-semibold text-[black]`}
      >
        Modificar usuários
      </h2>
      <Users setUserTh={"Modificar"} setUserTd={"modify"} />
    </div>
  );
};

export default ModifyUserScreen;
