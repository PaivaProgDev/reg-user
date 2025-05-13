import { useAppContext } from "../../context/AppContext";
import Form from "../Form";

const RegistrationScreen = () => {
  const { aside, theme } = useAppContext();

  return (
    <div
      className={`${
        aside && "ml-[13.25rem]"
      } h-full flex flex-col transition-all 
      `}
    >
      <h2
        className={`${
          theme === "dark" &&
          "border-b-1 border-b-[#4b4b4b] !bg-[var(--bg-secondary-dark-color)] text-white"
        } bg-[var(--primary-color)] opacity-[.7] px-6 py-3 text-[.92rem] uppercase font-semibold text-[black]`}
      >
        Cadastrar usuários
      </h2>
      <div className="flex justify-center m-3">
        <Form />
      </div>
    </div>
  );
};

export default RegistrationScreen;
