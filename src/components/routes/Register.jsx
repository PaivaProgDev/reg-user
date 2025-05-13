import { useAuthContext } from "../../context/AuthContext";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { setEmail, setPassword, createUserAccount } = useAuthContext();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`flex flex-col h-fit w-full max-w-[30rem] border py-7 px-8 rounded border-gray-300 shadow-md shadow-gray-300`}
    >
      <p className="text-center">Cadastre-se</p>
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
        <p className="text-[13px] flex gap-2">
          Já tens conta?
          <Link
            className="font-semibold text-[var(--primary-color)]"
            to="/login"
          >
            Entrar
          </Link>
        </p>
      </div>
      <Button
        onClick={() => {
          createUserAccount();
          navigate("/login");
        }}
        content={"Cadastrar"}
        className={"mt-[1rem]"}
      />
    </form>
  );
};

export default Register;
