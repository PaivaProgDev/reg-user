import { createContext, useContext, useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../backend/db";

// Cria o contexto
const AppContext = createContext();

// Hook para simplificar o processo de invocar os valores
export const useAppContext = () => useContext(AppContext);

// Provedor
export const AppProvider = ({ children }) => {
  // Estado dos inputs
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");

  // Novo usuário
  const newUser = {
    name,
    contact,
    city,
    dateRegister: new Date().toLocaleDateString(),
  };

  // Cria o novo usuário
  const createUser = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "users"), { newUser });

      console.log("Documento criado com ID:", docRef.id);
    } catch (e) {
      console.log("error:", e);
    }

    setName("");
    setContact("");
    setCity("");
  };

  // Valores a serem passado via context
  const value = {
    name,
    contact,
    city,
    setName,
    setContact,
    setCity,
    createUser,
  };

  // Retorna o Context em todo o App
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
