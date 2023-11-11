import { useState } from "react";
import "./login.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login() {
  const [mode, setMode] = useState("login");
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  return (
    <div className="container">
      
     
        {mode === "login" ? (
          <div className="box">
            <Button className="sign-up" onClick={() => setMode("signup")}>Sign Up</Button>
            <h1>Login</h1>
              <TextField className="login-content" id="input-with-sx" label="Enter username" variant="standard" value={username} onChange={(e) => setUsername(e.target.value)}/>
  
            <TextField className="login-content" id="standard-basic" label="Enter password" variant="standard" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  
            <Button className="login-content">Login</Button>
           </div>
        ) : (
          <div className="box">
            <Button className="sign-up" onClick={() => setMode("login")}>Back</Button>
            <h1>Signup</h1>
                <TextField className="login-content" id="input-with-sx" label="Enter username" variant="standard" value={username} onChange={(e) => setUsername(e.target.value)}/>
      
    
              <TextField className="login-content" id="standard-basic" label="Enter password" variant="standard" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <TextField className="login-content" id="standard-basic" label="Confirm password" variant="standard" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              
    
              <Button className="login-content">Signup</Button>
           </div>
        )}
       


    </div>
  );
}