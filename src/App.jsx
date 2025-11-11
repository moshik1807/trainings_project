import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import TrainersPage from "./pages/TrainersPage";
import TrainerPage from "./pages/TrainerPage";
import TrainingsPage from "./pages/TrainingsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/trainer" element={<TrainerPage />} />
        <Route path="/trainer/:id" element={<TrainerPage />} />
        <Route path="/trainings" element={<TrainingsPage />} />
      </Routes>
    </Router>
  );
}
