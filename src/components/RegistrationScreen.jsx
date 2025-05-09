import { useAppContext } from "../context/AppContext";
import Form from "./Form";

const RegistrationScreen = () => {
  const { aside } = useAppContext();

  return (
    <div
      className={`${
        aside && "ml-[13.25rem]"
      } h-full flex flex-col transition-all`}
    >
      <h2 className="bg-[#B2C7FF] flex px-6 py-3 text-[.92rem] uppercase font-semibold text-[#363636]">
        Remover Usuários
      </h2>
      <div className="flex justify-center m-3">
        <Form />
      </div>
    </div>
  );
};

export default RegistrationScreen;
