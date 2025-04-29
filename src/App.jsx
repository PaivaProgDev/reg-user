import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <main className="App w-full max-w-[100rem] m-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/user-list" />
          <Route path="/user-registration" />
          <Route path="/modify-user" />
          <Route path="/remove-user" />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
