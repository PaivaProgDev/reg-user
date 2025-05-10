import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
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
  const [modalModify, setModalModify] = useState(false);
  const [userIdModify, setUserIdModify] = useState(null);
  const [aside, setAside] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Info input modify users
  const [icon, setIcon] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [change, setChange] = useState("");

  // State dos usuários modificados
  const [modifyName, setModifyName] = useState("");
  const [modifyContact, setModifyContact] = useState("");
  const [modifyCity, setModifyCity] = useState("");

  // Gera um ID por usuário
  const userIdGenerator = Math.random().toString(36).substring(2, 9);

  // Cria o novo usuário
  const createUser = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "users"), {
        id: userIdGenerator,
        name: name.charAt(0).toLocaleUpperCase() + name.substring(1),
        city: city.charAt(0).toLocaleUpperCase() + city.substring(1),
        dateRegister: {
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
        contact,
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

  // Deletar usuário
  const deleteUser = async (id) => {
    try {
      const docRef = doc(db, "users", id);
      await deleteDoc(docRef);

      toast.error("Usuário excluído");
    } catch (erro) {
      toast.error("Não foi possível excluír o usuário!");
    }
  };

  // Modifica os dados do usuário
  const modifyUser = async (id) => {
    try {
      const docRef = doc(db, "users", id);
      await updateDoc(docRef, {
        name: modifyName,
        contact: modifyContact,
        city: modifyCity,
        modifyDate: {
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
      });

      toast.warning("Usuário modificado!");
    } catch (erro) {
      console.log(erro);
    }
  };

  useEffect(() => {
    getUser();

    // Checa se está em mobiles
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
  }, [readUsers]);

  // Menu fecha ao clicar somente em mobiles
  const checkClick = () => {
    if (isMobile) setAside(false);
  };

  // Valores a serem passados via context
  const value = {
    name,
    contact,
    city,
    readUsers,
    modalModify,
    userIdModify,
    aside,
    icon,
    setIcon,
    placeholder,
    setPlaceholder,
    change,
    setModifyName,
    setModifyContact,
    setModifyCity,
    setChange,
    setName,
    setContact,
    setCity,
    createUser,
    deleteUser,
    modifyUser,
    setModalModify,
    setUserIdModify,
    setAside,
    checkClick,
  };

  // Retorna o Context em todo o App
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
