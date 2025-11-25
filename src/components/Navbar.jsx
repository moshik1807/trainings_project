import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppBar, Toolbar } from "@mui/material";

import { Button } from "./Button";
import { SearchTrainer } from "./SearchTrainer";
import { logout } from "../features/user/userSlice";
import { LOCATIONS } from "../constantVariables";

import "../styles/componentsStyle/NavbarStyle.css";

export const Navbar = ({ showSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate(LOCATIONS.loginPage);
  };

  return (
    <AppBar position="static" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        <Button onClick={() => navigate(LOCATIONS.trainersPage)}>
          trainers
        </Button>
        <Button onClick={() => navigate(LOCATIONS.trainingsPage)}>
          trainings
        </Button>
        <Button onClick={handleExit}>exit</Button>
        {showSearch && <SearchTrainer />}
      </Toolbar>
    </AppBar>
  );
};
