import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [user, setUser] = useState({});

  const auth = getAuth();

  const { signInUsingGoogle } = useAuth();

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked); //change from login to registration.
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistrations = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long"); //for length of minimum 6 character
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password must contain 2 uppercase letter"); // for two uppercase letters
      return;
    }
    isLogin ? processLogin(email, password) : registerNewUser(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password) // for existing user
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password) //for registering new user
      .then((result) => {
        setUser(result.user);
        setUserName();
        window.location.reload();

        setError("");
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  //login with email, password and google sign in

  return (
    <div className="mt-5">
      <form onSubmit={handleRegistrations}>
        <h3 className="text-primary">
          Please {isLogin ? "Login" : "Register"}
        </h3>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleEmailChange}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                onChange={toggleLogin}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="" htmlFor="gridCheck1">
                Already Registered
              </label>
            </div>
          </div>
        </div>
        <div className=" mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <br />
      <br />
      <div>-----------------------------------------------------------</div>
      <br /> <br />
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle} className="btn btn-warning mb-5">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
