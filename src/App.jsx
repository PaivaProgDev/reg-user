import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Aside from "./components/Aside";
import UserListScreen from "./components/routes/UserListScreen";
import RegistrationScreen from "./components/routes/RegistrationScreen";
import { ToastContainer } from "react-toastify";
import ModifyUserScreen from "./components/routes/ModifyUserScreen";
import Modal from "./components/Modal";
import Login from "./components/routes/Login";
import Register from "./components/routes/Register";
import NotFound from "./components/routes/NotFound";
import { useAppContext } from "./context/AppContext";
import { useAuthContext } from "./context/AuthContext";

// Rotas Privadas

import PublicRoutes from "./components/routes/Public/PublicRoutes";
import PrivateRoutes from "./components/routes/Private/PrivateRoutes";

const App = () => {
  const { modalModify, theme, readUsers } = useAppContext();
  const { isLogged } = useAuthContext();

  return (
    <main
      className={`${
        theme === "dark" && "bg-[var(--bg-primary-dark-color)]"
      } w-full relative h-screen overflow-hidden transition-colors`}
    >
      <BrowserRouter>
        {isLogged && (
          <>
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
            <Header />
            <Aside />
            {modalModify && <Modal />}
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoutes>
                <UserListScreen />
              </PrivateRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoutes>
                <Register />
              </PublicRoutes>
            }
          />
          <Route
            path="/user-registration"
            element={
              <PrivateRoutes>
                <RegistrationScreen />
              </PrivateRoutes>
            }
          />
          <Route
            path="/modify-user"
            element={
              <PrivateRoutes>
                <ModifyUserScreen />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
