import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Aside from "./components/Aside";
import UserList from "./components/UserList";
import RegistrationScreen from "./components/RegistrationScreen";
import RemoveUserScreen from "./components/RemoveUserScreen";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <main className="App w-full relative h-screen overflow-hidden">
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
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user-registration" element={<RegistrationScreen />} />
          <Route path="/modify-user" />
          <Route path="/remove-user" element={<RemoveUserScreen />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
