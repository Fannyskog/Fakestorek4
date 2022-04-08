import React, { useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { authState } from "../stores/auth/atom";
//import {  adminState } from "../stores/admin/atom";

import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useRecoilState(authState);
  //const [admin, setAdmin] = useRecoilState(adminState);

  
    function handlelogin() {
      axios
        .post("https://k4backend.osuka.dev/auth/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          axios
            .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
            .then((userData) => {
              setAuth({
                user: userData.data,
                token: res.data.token,
              });
              navigate(userData.data.role === "user" ? "/Profile" : "/Admin");
  
              /*if(userData.data.role === "user"){
                navigate("/Profile"); }
                else {
                 navigate("/Admin");*/
              
                });
        });
   }
        
   const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      
    <div className="login">
      
    <h1>Enter login</h1>


      <form className="login-form" onSubmit={handleSubmit}>
      
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="#"><h5 className="password">Forgot password?</h5></Link>
        <button type="submit" onClick={handlelogin}>Log in</button>
        
        <Link to="/signup"><h4>Sign up</h4></Link>
        


      </form>
      </div>
    </div>
  )};


export default Login;