import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import Button from "../Button";

const Login = () => {
  const { theme } = useAppContext();
  return (
    <div className="h-screen w-full">
      <form
        className={`
        ${
          theme === "dark" &&
          "bg-[var(--bg-secondary-dark-color)] shadow-none border-0 placeholder:text-white"
        }
        flex flex-col h-fit w-full max-w-[30rem] border py-7 px-8 rounded border-gray-300 shadow-md shadow-gray-300`}
      >
        <p className="text-center">Faça seu login</p>
        <label>
          <input type="text" placeholder="email" />
        </label>
        <label>
          <input type="text" placeholder="password" />
        </label>
        <div>
          <p className="text-[13px] ">
            Não tens conta?{" "}
            <Link
              className="font-semibold text-[var(--primary-color)]"
              to="/register"
            >
              Entrar
            </Link>{" "}
          </p>
        </div>
        <Button content={"Entrar"} className={"mt-[1rem]"} />
      </form>
    </div>
  );
};

export default Login;
