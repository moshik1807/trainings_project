import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Box } from "@mui/material";

import { signInModes } from "../constantVariables";
import Form from "../components/Form";
import { userSelector } from "../features/user/userSlice";
import { Button } from "../components/Button";
import { locations } from "../constantVariables";

export default function LoginPage() {
  const navigate = useNavigate();

  const [authMode, setAuthMode] = useState("");

  const user = useSelector(userSelector);

  useEffect(() => {
    if (user) {
      navigate(locations.trainersPage);
    }
  }, [user, navigate]);

  if (!authMode) {
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
        <Button onClick={() => setAuthMode(signInModes.login)}>
          {signInModes.login}
        </Button>

        <Button onClick={() => setAuthMode(signInModes.signUp)}>
          {signInModes.signUp}
        </Button>
      </Box>
    );
  }

  return <Form authMode={authMode} />;
}
