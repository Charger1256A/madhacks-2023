import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/home.jsx";
import Login from "./screens/login/login.jsx";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  }

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Home onLogout={() => logout()} />}></Route>
      ) : (
        // TODO: Change Login to Home
        <Route
          path="/"
          element={<Login onLogin={(user) => login(user)} />}
        ></Route>
      )}
    </Routes>
  );
}
