import React from 'react'
import { getAuth, signOut } from "firebase/auth";

const LogOut = () => {

  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  

  return (
    <div>LogOut</div>
  )
}

export default LogOut;