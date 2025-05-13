import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import Button from "../Button";

const Login = () => {
  const { signInUserAccount, setEmail, setPassword, AuthState } =
    useAuthContext();

  const navigate = useNavigate();

  return (
    <div className="h-full w-screen justify-items-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`flex flex-col h-fit w-full max-w-[30rem] border py-7 px-8 rounded border-gray-300 shadow-md shadow-gray-300`}
      >
        <p className="text-center">Faça seu login</p>
        <label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
        </label>
        <label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="password"
          />
        </label>
        <div>
          <p className="text-[13px] ">
            Não tens conta?
            <Link
              className="font-semibold text-[var(--primary-color)]"
              to="/register"
            >
              Cadastrar
            </Link>
          </p>
        </div>
        <Button
          onClick={() => {
            signInUserAccount();
            navigate("/");
          }}
          content={"Entrar"}
          className={"mt-[1rem]"}
        />
      </form>
    </div>
  );
};

export default Login;
