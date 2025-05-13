import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";

import { auth } from "../../backend/db";

// Cria o contexto
const AuthContext = createContext();

// Hook para simplificar o processo de invocar os valores
export const useAuthContext = () => useContext(AuthContext);

// Provedor
export const AuthProvider = ({ children }) => {
  // Estado do usuário
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  // Email e senha para criação do agente usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setUid] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  // Registra o usuário gerente
  const createUserAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error.errorCode);
      console.log(error.message);
    });
  };

  // Faz login do usuário agente
  const signInUserAccount = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredentials.user);
      setIsLogged(true);
      return true;
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  const signOutUser = () => {
    signOut(auth).then(() => {
      alert("Deslogado com sucesso!");
    });
  };

  useEffect(() => {
    // Reconhece o usuário conectado ao carregar a página
    const getUserStorage = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLogged(true);
      } else {
        setUser(null);
        setIsLogged(false);
      }
    });

    return () => getUserStorage();
  }, []);

  // Valores a serem passados via context
  const value = {
    user,
    isLogged,
    errorMessage,
    setEmail,
    setPassword,
    createUserAccount,
    setIsLogged,
    signInUserAccount,
    setErrorMessage,
    signOutUser,
  };

  // Retorna o Context em todo o App
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
