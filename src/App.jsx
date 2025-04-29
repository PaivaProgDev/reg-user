import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <BrowserRouter>
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
