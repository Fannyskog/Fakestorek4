
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { authState } from "../stores/auth/atom";


function Profile() {
 const { user } = useRecoilValue(authState);
  const reset = useResetRecoilState(authState);

  return (
  <div>
     <Link to="/Login"><button className="log-btn" onClick={reset}>Log out</button></Link>
  
  <div className="account">
  <h1 className="title">My Account</h1>
  <p>Email: {user.email}</p>
  <p>Username: {user.username}</p>
  <p>Password: {user.password}</p>
  <p>Phone: {user.phone}</p>

  
  </div>
       
      
    
  
   </div>
  );
}

export default Profile;