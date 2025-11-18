import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Box } from "@mui/material";

import { SIGN_IN_MODES, LOCATIONS } from "../constantVariables";
import Form from "../components/Form";
import { userSelector } from "../features/user/userSlice";
import { Button } from "../components/Button";

export default function LoginPage() {
  const navigate = useNavigate();

  const [authMode, setAuthMode] = useState("");

  const user = useSelector(userSelector);

  useEffect(() => {
    if (user) {
      navigate(LOCATIONS.trainersPage);
    }
  }, [user, navigate]);

  return (
    <>
      {!authMode ? (
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
          <Button onClick={() => setAuthMode(SIGN_IN_MODES.login)}>
            {SIGN_IN_MODES.login}
          </Button>

          <Button onClick={() => setAuthMode(SIGN_IN_MODES.signUp)}>
            {SIGN_IN_MODES.signUp}
          </Button>
        </Box>
      ) : (
        <Form authMode={authMode} />
      )}
    </>
  );
}
