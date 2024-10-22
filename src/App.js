import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/header";
import User from "./Components/User/user";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}
      <Routes>
        <Route path="/login" element={<User />} />
        <Route path="/register" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
