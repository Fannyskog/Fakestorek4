import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../stores/auth/atom";

export const useAccessDenied = () => {
  const navigate = useNavigate();
  const { token } = useRecoilValue(authState);

  useEffect(() => {
    if (!token) navigate("/Login");
    if(token) navigate("/Profile");
  }, []);
};
  /*useEffect(() => {
    if (!token) navigate("/login");
    if (token) navigate("/profile");
  }, []);
};*/
  /*useEffect(() => {
    if (token.id === 1216874387060039) {
      navigate("/admin");
    } else {
      navigate("/profile");
    }});
    
 
useEffect(() => {
  if(token && username===admin) {
    navigate("/admin");
} else {
  navigate("/profile");

}});*/



