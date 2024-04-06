import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import app from "../friebase/firebase.config";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContexts = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [lodding, setLodding] = useState(true);

  const creatuser = (email, password) => {
    setLodding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLodding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLodding(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the stage change", currentUser);
      setuser(currentUser);
      setLodding(false);
    });
    return () => {
      unsubscrib();
    };
  }, []);
  const authInfo = {
    user,
    creatuser,
    logout,
    login,
    lodding,
  };
  return (
    <div>
      <AuthContexts.Provider value={authInfo}>{children}</AuthContexts.Provider>
    </div>
  );
};

export default AuthProvider;
