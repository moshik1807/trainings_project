import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, TextField, Box } from "@mui/material";

import { SIGN_IN_MODES } from "../constantVariables";
import { getUserById } from "../features/user/userThunk";
import { login, signup } from "../api";
import { LOCATIONS } from "../constantVariables";

import "../styles/componentsStyle/LoginFormStyle.css";

export const LoginForm = ({ authMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let token;

    try {
      if (authMode === SIGN_IN_MODES.signUp) {
        token = await signup({ name, password });
      } else {
        token = await login({ name, password });
      }
      localStorage.setItem("token", token);

      dispatch(getUserById(token));

      navigate(LOCATIONS.trainersPage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form-container">
      <TextField
        label="Name"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        required
      />
      <TextField
        label="password"
        type="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
