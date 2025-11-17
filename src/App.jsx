import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { getUserById } from "./features/user/userThunk";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import TrainersPage from "./pages/TrainersPage";
import TrainerPage from "./pages/TrainerPage";
import TrainingsPage from "./pages/TrainingsPage";
import { locations } from "./constantVariables";

export default function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getUserById(token));
    }
  }, [dispatch, token]);

  return (
    <Router>
      <Routes>
        <Route path={locations.loginPage} element={<LoginPage />} />
        <Route path={locations.trainersPage} element={<TrainersPage />} />
        <Route path={locations.trainerPage} element={<TrainerPage />} />
        <Route path={locations.trainingsPage} element={<TrainingsPage />} />
      </Routes>
    </Router>
  );
}
