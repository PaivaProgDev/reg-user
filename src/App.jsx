import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Aside from "./components/Aside";
import UserListScreen from "./components/UserListScreen";
import RegistrationScreen from "./components/RegistrationScreen";
import { ToastContainer } from "react-toastify";
import ModifyUserScreen from "./components/ModifyUserScreen";
import { useAppContext } from "./context/AppContext";
import Modal from "./components/Modal";
const App = () => {
  const { modalModify } = useAppContext();

  return (
    <main className=" w-full relative h-screen overflow-hidden">
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
        <Header />
        <Aside />
        {modalModify && <Modal />}
        <Routes>
          <Route path="/" element={<UserListScreen />} />
          <Route path="/user-registration" element={<RegistrationScreen />} />
          <Route path="/modify-user" element={<ModifyUserScreen />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
