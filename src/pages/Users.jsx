import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState, useResetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { usersState } from "../stores/users/atom";
import { authState } from "../stores/auth/atom";

function Users() {
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
  
console.log(users);
 return (
  <div>
     <Link to="/Login"><button className="log-btn" onClick={reset}>Log out</button></Link>
    <p className="user"> All the user available on the website:</p>
     <div className="users">
      {users.map((user) => (
        <div key={user.id}>
          <h3 className="all-users">🟢{user.username}</h3>
          
        </div>
      ))}
      
</div>
      
   </div>
  );
}
export default Users;