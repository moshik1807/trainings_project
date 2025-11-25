import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { SIGN_IN_MODES, LOCATIONS } from "../constantVariables";
import { LoginForm } from "../components/LoginForm";
import { userSelector } from "../features/user/userSlice";
import { Button } from "../components/Button";

import "../styles/pagesStyle/LoginPageStyle.css";

export const LoginPage = () => {
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
        <div className="login-container">
          <Button onClick={() => setAuthMode(SIGN_IN_MODES.login)}>
            {SIGN_IN_MODES.login}
          </Button>

          <Button onClick={() => setAuthMode(SIGN_IN_MODES.signUp)}>
            {SIGN_IN_MODES.signUp}
          </Button>
        </div>
      ) : (
        <LoginForm authMode={authMode} />
      )}
    </>
  );
};
