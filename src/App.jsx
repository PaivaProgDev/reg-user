import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Aside from "./components/Aside";
import UserList from "./components/userList";

const App = () => {
  return (
    <main className="App w-full relative h-screen overflow-hidden">
      <BrowserRouter>
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user-registration" />
          <Route path="/modify-user" />
          <Route path="/remove-user" />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
