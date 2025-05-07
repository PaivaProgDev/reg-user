import { createContext, use, useContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
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
  const [message, setMessage] = useState("");
  const [readUsers, setReadUsers] = useState([]);

  // Transforma a primera letra em maiúscula
  const firstLetter = name.charAt(0).toUpperCase();
  // Pega o restante do nome
  const otherLetters = name.substring(1);

  const randomId = Math.random().toString(36).substring(2, 9);

  // Cria o novo usuário
  const createUser = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "users"), {
        id: randomId,
        name: firstLetter + otherLetters,
        dateRegister: new Date().toLocaleDateString(),
        contact,
        city: firstLetter + otherLetters,
      });

      setMessage(`O usuário ${name} foi cadastrado com sucesso!`);
    } catch (e) {
      setMessage(":( usuário não cadastrado, tente novamente...");
    }

    setName("");
    setContact("");
    setCity("");
  };

  // Ler os dados
  const getUser = async () => {
    const docRef = await getDocs(collection(db, "users"));
    const users = docRef.docs.map((user) => ({
      ...user.data(),
    }));
    setReadUsers(users);
  };

  getUser();

  // Valores a serem passado via context
  const value = {
    name,
    contact,
    city,
    message,
    readUsers,
    setName,
    setContact,
    setCity,
    createUser,
  };

  // Retorna o Context em todo o App
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
