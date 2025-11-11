import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppBar, Toolbar } from "@mui/material";

import { Button } from "./Button";
import SearchTrainer from "./SearchTrainer";
import { logout } from "../features/user/userSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();

  const handleExit = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ borderRadius: "10px" }}>
      <Toolbar
        sx={{ bgcolor: "rgba(146, 178, 193, 0.8)", borderRadius: "10px" }}
      >
        <Button onClick={() => navigate("/trainers")}>trainers</Button>

        <Button onClick={() => navigate("/trainings")}>trainings</Button>

        <Button onClick={handleExit}>exit</Button>
        {location.pathname === "/trainers" && <SearchTrainer />}
      </Toolbar>
    </AppBar>
  );
}
