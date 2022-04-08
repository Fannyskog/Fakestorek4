import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authState } from "../stores/auth/atom";



function Signup() {
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authState);
    const [user, setUser] = useState({
      email: "",
      username: "",
      password: "",
      name: {
        firstname: "",
        lastname: "",
      },
      address: {
        city: "",
        street: "",
        zipcode: "",
        number: "",
      },
      phone: "",
    });
    
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("https://k4backend.osuka.dev/users", {
        email: user.email,
        username: user.username,
        password: user.password,
        name: {
          firstname: user.firstname,
          lastname: user.lastname,
        },
        address: {
          city: user.city,
          street: user.street,
          number: user.number,
          zipcode: user.zipcode,
        },
        phone: user.phone,
        })
        .then((res) => {
          axios
            .post("https://k4backend.osuka.dev/auth/login", {
              username: res.data.username,
              password: res.data.password,
            })
            .then((res) => {
              axios
                .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
                .then((userData) => {
                  setAuth({
                    user: userData.data,
                    token: res.data.token,
                  });
                })
                .catch((error) => console.log(error));
            });
  
          navigate("/Profile");
        });
    };
    
  return (
   
    <div className="login">
      <h1>Sign up</h1>
      <form className="login-form" onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Email"
          required
          value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        
        <input
          type="text"
          placeholder="Username"
          required
          value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />

         <input
          type="text"
          placeholder="Password"
          required
          value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

         <input
          type="text"
          placeholder="Firstname"
          required
          value={user.firstname} onChange={(e) => setUser({ ...user, firstname: e.target.value })} />

         <input
          type="text"
          placeholder="Lastname"
          required
          value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} />

         <input
          type="text"
          placeholder="City"
          required
          value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })} />

         <input
          type="text"
          placeholder="Street"
          required
          value={user.street} onChange={(e) => setUser({ ...user, street: e.target.value })} />

        <input
          type="text"
          placeholder="Number"
          required
          value={user.number} onChange={(e) => setUser({ ...user, number: e.target.value })} />

        <input
          type="text"
          placeholder="Zipcode"
          required
          value={user.zipcode} onChange={(e) => setUser({ ...user, zipcode: e.target.value })} />

        <input
          type="text"
          placeholder="Phone"
          required
          value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
       
        <button type="submit" onSubmit={handleSubmit}>Sign up</button>
        <Link to="/login"><h5>Already a member? Log in</h5></Link>
        
        
      </form>
    </div>
   
    
  );
  }

export default Signup;