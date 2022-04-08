import React, { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Shipping from "./components/Shipping";
import { useRecoilState, useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { productsState } from "./stores/products/atom";


import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Info";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Users from "./pages/Users";

import { userState, authState } from "./stores/auth/atom";


function App() {
  const setProducts = useSetRecoilState(productsState);
  const setUsers = useSetRecoilState(userState);
  const [auth, setAuth] = useRecoilState(authState);
  
  

  useEffect(() => {
    fetch("https://k4backend.osuka.dev/products") 
      .then((res) => res.json()) 
      .then((json) => setProducts(json)); 
  }, []);

  useEffect(() => {
    fetch("https://k4backend.osuka.dev/users") 
    .then((res) => res.json()) 
    .then((json) => setUsers(json)); 
}, []);  


  return (
    <div>
     <Navbar />
     <Shipping />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Home" element={<Home />} />  
          <Route path="/Products" element={<Products />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
        
        <Link to="/Signup"><button className="points"><i class="fa-solid fa-envelope"></i></button></Link>
    </div>
  );
}

export default App;
