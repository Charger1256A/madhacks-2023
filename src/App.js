import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/home.jsx";
import Login from "./screens/login/login.jsx";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Login />}></Route>
        // TODO: Change Login to Home 
      ) : (
        <Route path="/" element={<Home />}></Route>
      )}
    </Routes>
  )
}
