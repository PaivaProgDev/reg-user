import React from "react";
import { useAppContext } from "../../context/AppContext";

const Register = () => {
  const { theme } = useAppContext();

  return (
    <form
      className={`
        ${
          theme === "dark" &&
          "bg-[var(--bg-secondary-dark-color)] shadow-none border-0 placeholder:text-white"
        }
        flex flex-col h-fit w-full max-w-[30rem] border py-7 px-8 rounded border-gray-300 shadow-md shadow-gray-300`}
    >
      <label>
        <input type="text" placeholder="email" />
      </label>
      <label>
        <input type="text" placeholder="password" />
      </label>
      <div>
        <strong>Já tens conta? </strong>
      </div>
    </form>
  );
};

export default Register;
