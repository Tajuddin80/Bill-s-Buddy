import React, { useState ,createContext} from "react";
import { auth } from "../firebase.config";
import {  createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

const createUser = (email, password) =>{
  return createUserWithEmailAndPassword(auth , email, password)
}


  const [user, setUser] = useState(null);
  const authData = {
    user,
    setUser,
    createUser
  };
  console.log(user);
  
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
