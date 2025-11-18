import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, TextField, Box, Alert } from "@mui/material";

import { SIGN_IN_MODES } from "../constantVariables";
import { getUserById } from "../features/user/userThunk";
import { login, signup } from "../api";
import { LOCATIONS } from "../constantVariables";

export default function Form({ authMode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

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
      
      setError("Incorrect name or email.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "50px auto",
        marginBlock: "300px",
        padding: "20px",
        backgroundColor: "rgba(179, 229, 252, 0.8)",
        borderRadius: "10px",
      }}
    >
      {error && (
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      )}

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
    </Box>
  );
}
