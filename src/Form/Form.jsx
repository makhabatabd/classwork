import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  function signIn(e) {
    e.preventDefault();
    if (password === passwordAgain && password && email && passwordAgain) {
      setIsLogIn(true);
    } else if (!password || !email || !passwordAgain) {
      alert("Fill in");
    } else {
      alert("Wrong password");
    }
  }
  function logOut() {
    setEmail("");
    setPassword("");
    setPasswordAgain("");
    setIsLogIn(false);
  }
  return (
    <div>
      {isLogIn ? (
        <>
          <p>{email}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <form style={{ marginTop: "30px", marginBottom: "100px" }}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            required
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
          />
          <br />
          <input
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
            type="password"
            placeholder="password again"
            required
          />
          <br />
          <button onClick={signIn}>Log in</button>
        </form>
      )}
    </div>
  );
};

export default Form;
