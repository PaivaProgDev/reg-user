import { createContext, useContext, useEffect, useState } from "react";

// Cria o contexto
const AppContext = createContext();

// Hook para simplificar o processo de invocar os valores
export const useAppContext = () => useContext(AppContext);

// Provedor
export const AppProvider = ({ children }) => {
  // Usuários
  const [users, setUsers] = useState(() => {
    const storage = JSON.parse(localStorage.getItem("users"));
    return storage ? storage : [];
  });

  // Pega os usuários
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Estado dos inputs
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  // Novo usuário
  const newUser = {
    id: users.length + 1,
    name,
    contact,
    email,
    city,
  };

  // Cria o novo usuário
  const createUser = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, newUser]);

    setName("");
    setContact("");
    setEmail("");
    setCity("");
  };

  // Valores a serem passado via context
  const value = {
    name,
    contact,
    email,
    city,
    users,
    setName,
    setContact,
    setEmail,
    setCity,
    createUser,
  };

  // Retorna o Context em todo o App
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
