import React, { useEffect }from "react";
import axios from "axios";
import { useResetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { authState } from "../stores/auth/atom";
import { useRecoilValue } from "recoil";
import { productsState } from "../stores/products/atom";
import { usersState } from "../stores/users/atom";

function Admin() {
 const navigate = useNavigate();
 const products = useRecoilValue(productsState);
 
 const auth = useRecoilValue(authState);
 const reset = useResetRecoilState(authState);
 const [users, setUsers] = useRecoilState(usersState);



 function getAdmin() {
   axios
     .get("https://k4backend.osuka.dev/users")
     .then((res) => {
       setUsers(res.data);
       res.data = users;
     })
     .catch((error) => console.log(error));
 }

 useEffect(() => {

   getAdmin();

 }, []);
 

 return (
  <div>
    <Link to="/Login"><button className="log-btn" onClick={reset}>Log out</button></Link>
     <Link to="/Users"><button className="users-btn"> Users on website</button></Link>
     
     
     <h1 className="all-prod"> All the products available on the website:</h1>
     <div className="list">

      {products.map((product) => (
        <div key={product.id}>
          <img className="show-img" src={product.image}></img>
          
         
        </div>
      ))}
      </div>

      
   </div>
  );
}

 

export default Admin;