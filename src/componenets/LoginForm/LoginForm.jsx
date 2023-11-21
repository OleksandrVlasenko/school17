import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
// import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  // const handleClick = () => {
  //   navigate("/register", { replace: true });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    formReset();
  };

  const formReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          id="email"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          id="password"
        />
      </label>

      <button type="submit">Увійти</button>
    </form>
  );
};
