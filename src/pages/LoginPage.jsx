import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Box } from "@mui/material";

import { signInModes } from "../modes";
import Form from "../components/Form";
import { userSelector } from "../features/user/userSlice";
import { Button } from "../components/Button";

export default function LoginPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("");

  const user = useSelector(userSelector);

  useEffect(() => {
    if (user) {
      navigate("/trainers");
    }
  }, [user, navigate]);

  if (!mode) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Button onClick={() => setMode(signInModes.login)}>{signInModes.login}</Button>

        <Button onClick={() => setMode(signInModes.signUp)}>{signInModes.signUp}</Button>
      </Box>
    );
  }

  return <Form mode={mode} />;
}
