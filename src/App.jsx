import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/LoginPage";
import TrainersPage from "./pages/TrainersPage";
import TrainerPage from "./pages/TrainerPage";
import TrainingsPage from "./pages/TrainingsPage";
import { LOCATIONS } from "./constantVariables";
import { getUserById } from "./features/user/userThunk";


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
        <Route path={LOCATIONS.loginPage} element={<LoginPage />} />
        <Route path={LOCATIONS.trainersPage} element={<TrainersPage />} />
        <Route path={LOCATIONS.trainerPage} element={<TrainerPage />} />
        <Route path={LOCATIONS.trainingsPage} element={<TrainingsPage />} />
      </Routes>
    </Router>
  );
}
