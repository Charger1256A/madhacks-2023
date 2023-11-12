import { useState } from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const URL = "http://127.0.0.1:5000";

export default function Login(props) {
  const [mode, setMode] = useState("login");
  const [usernameLogin, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [usernameSignUp, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setSignupConfirmPassword] = useState("TEST***");

  const signup = () => {
<<<<<<< HEAD
    axios
      .post(`${URL}/signup`, {
        username: usernameSignUp,
        password: signupPassword,
        confirmPassword: confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = () => {
    console.log("blahhh");
    axios
      .post(`http://127.0.0.1:5000/login`, {
        username: usernameLogin,
        password: setLoginPassword,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("test");
        console.log(err);
      });
  };

  return (
    <div className="container">
      {mode === "login" ? (
        <div className="box">
          <Button className="sign-up" onClick={() => setMode("signup")}>
            Sign Up
          </Button>
          <h1>Login</h1>
          <TextField
            className="login-content"
            id="input-with-sx"
            label="Enter username"
            variant="standard"
            value={usernameLogin}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
=======
    axios.post(`${URL}/signup`, {
      username: usernameSignUp,
      password: signupPassword,
      confirmPassword: confirmPassword,
    })
    .then(response => {
      props.onLogin(response.data);
      console.log(JSON.stringify(response.data));
  })
  .catch(err => {
      alert(err.message);
  })
  }

  const login = () => {
    axios.post(`${URL}/login`, {
      username: usernameLogin,
      password: loginPassword,
    })
    .then(response => {
      props.onLogin(response.data)
      console.log(JSON.stringify(response.data));
  })
  .catch(err => {
      alert(err.message);
  })
  }
   

  return (
    <div className="container">
        {mode === "login" ? (
          <div className="box">
            <Button className="sign-up" onClick={() => setMode("signup")}>Sign Up</Button>
            <h1>Login</h1>
              <TextField className="login-content" id="input-with-sx" label="Enter username" variant="standard" value={usernameLogin} onChange={(e) => setLoginUsername(e.target.value)}/>
  
            <TextField className="login-content" id="standard-basic" label="Enter password" variant="standard" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
  
            <Button className="login-content" onClick={() => login()}>Login</Button>
           </div>
        ) : (
          <div className="box">
            <Button className="sign-up" onClick={() => setMode("login")}>Back</Button>
            <h1>Signup</h1>
                <TextField className="login-content" id="input-with-sx" label="Enter username" variant="standard" value={usernameSignUp} onChange={(e) => setSignupUsername(e.target.value)}/>
    
              <TextField className="login-content" id="standard-basic" label="Enter password" variant="standard" type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)}/>
              <TextField className="login-content" id="standard-basic" label="Confirm password" variant="standard" type="password" value={confirmPassword} onChange={(e) => setSignupConfirmPassword(e.target.value)}/>
              
              <Button className="login-content" onClick={() => signup()}>Signup</Button>
           </div>
        )}
       
>>>>>>> 9cb26d9e5f19d338a6eda855c94dc5bfa7f7ca72

          <TextField
            className="login-content"
            id="standard-basic"
            label="Enter password"
            variant="standard"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <Button className="login-content" onClick={() => login()}>
            Login
          </Button>
        </div>
      ) : (
        <div className="box">
          <Button className="sign-up" onClick={() => setMode("login")}>
            Back
          </Button>
          <h1>Signup</h1>
          <TextField
            className="login-content"
            id="input-with-sx"
            label="Enter username"
            variant="standard"
            value={usernameSignUp}
            onChange={(e) => setSignupUsername(e.target.value)}
          />

          <TextField
            className="login-content"
            id="standard-basic"
            label="Enter password"
            variant="standard"
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <TextField
            className="login-content"
            id="standard-basic"
            label="Confirm password"
            variant="standard"
            type="password"
            value={confirmPassword}
            onChange={(e) => setSignupConfirmPassword(e.target.value)}
          />

          <Button className="login-content" onClick={() => signup()}>
            Signup
          </Button>
        </div>
      )}
    </div>
  );
}
