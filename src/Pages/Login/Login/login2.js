import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import initializeAuthentication from "./../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

// process of working firebase authentication
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  // signin using google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };
  // handling user email and password
  const handleRegister = (e) => {
    console.log(email, password);
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 charecters");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError(" Ensure string has two uppercase letters.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setUserName();
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // update display name
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  // user login
  const processLogIn = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 charecters");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError(" Ensure string has two uppercase letters.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })

      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  // logOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
    handleRegister,
    handleEmail,
    handlePassword,
    error,
    processLogIn,
    handleName,
  };
};

export default useFirebase;
