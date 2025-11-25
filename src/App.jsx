import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { getUserById } from "./features/user/userThunk";
import { APP_ROUTES } from "./appRoutes";

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
        {APP_ROUTES.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <ToastContainer />
    </Router>
  );
}
