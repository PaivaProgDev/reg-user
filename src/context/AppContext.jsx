import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
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
  const [readUsers, setReadUsers] = useState([]);

  // Transforma a primera letra em maiúscula
  const firstLetter = name.charAt(0).toUpperCase();
  // Pega o restante do nome
  const otherLetters = name.substring(1);

  // Gera um ID por usuário
  const userIdGenerator = Math.random().toString(36).substring(2, 9);

  // Cria o novo usuário
  const createUser = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "users"), {
        id: userIdGenerator,
        name: firstLetter + otherLetters,
        dateRegister: new Date().toLocaleDateString(),
        contact,
        city: firstLetter + otherLetters,
      });

      toast.success("Usuário cadastrado! :D");

      setName("");
      setContact("");
      setCity("");
    } catch (e) {
      toast.error("Houve um erro, Tente novamente! :(");
    }
  };

  // Ler os dados
  const getUser = async () => {
    const docRef = await getDocs(collection(db, "users"));
    const users = docRef.docs.map((user) => ({
      id: user.id,
      data: user.data(),
    }));
    setReadUsers(users);
  };

  useEffect(() => {
    getUser();
  });

  const removeUsers = async (id) => {
    try {
      const docRef = doc(db, "users", id);
      await deleteDoc(docRef);
    } catch (erro) {
      console.log(erro);
    }
  };

  // Valores a serem passado via context
  const value = {
    name,
    contact,
    city,
    readUsers,
    setName,
    setContact,
    setCity,
    createUser,
    removeUsers,
  };

  // Retorna o Context em todo o App
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
