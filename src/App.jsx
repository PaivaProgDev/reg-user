import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Aside from "./components/Aside";
import UserListScreen from "./components/routes/UserListScreen";
import RegistrationScreen from "./components/routes/RegistrationScreen";
import { ToastContainer } from "react-toastify";
import ModifyUserScreen from "./components/routes/ModifyUserScreen";
import { useAppContext } from "./context/AppContext";
import Modal from "./components/Modal";
import Login from "./components/routes/Login";
import Register from "./components/routes/Register";
import { useState } from "react";
import NotFound from "./components/routes/NotFound";

const App = () => {
  const { modalModify, theme } = useAppContext();
  const [isLogged, setIsLogged] = useState(false);

  return (
    <main
      className={`${
        theme === "dark" && "bg-[var(--bg-primary-dark-color)] text-[red] "
      } w-full relative h-screen overflow-hidden transition-colors`}
    >
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        {isLogged && <Header />}
        {modalModify && <Modal />}
        <Aside />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={isLogged && <UserListScreen />} />
          <Route
            path="/user-registration"
            element={isLogged && <RegistrationScreen />}
          />
          <Route
            path="/modify-user"
            element={isLogged && <ModifyUserScreen />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
