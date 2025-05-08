import React, { useState, useEffect } from "react";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  const handleLogOut = () => {
    logOut()
      .then(() => {
  
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
 
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // Load name & photo (check both old/new keys)
      const savedName = localStorage.getItem("userName") || localStorage.getItem("username");
      const savedPhoto = localStorage.getItem("userPhoto");

      if (savedName) setName(savedName);
      if (savedPhoto) setPhoto(savedPhoto);

      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const getPaidItemIds = () => {
    const ids = [];
    for (let key in localStorage) {
      if (key.startsWith("paid-") && localStorage.getItem(key) === "true") {
        const id = key.split("paid-")[1];
        ids.push(id);
      }
    }
    return ids;
  };

  const authData = {
    user,
    setUser,
    createUser,
    signInUser,
    handleLogOut,
    getPaidItemIds,
    setName,
    name,
    photo,
    setPhoto,loading, setLoading
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
