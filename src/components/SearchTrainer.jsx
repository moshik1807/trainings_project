import { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField } from "@mui/material";

import { Button } from "./Button";
import { getTrainersBySearch } from "../features/SearchTrainers/SearchTrainersThunk";
import { cleanSearch } from "../features/SearchTrainers/SearchTrainersSlice";

import "../styles/componentsStyle/SearchTrainerStyle.css";

export const SearchTrainer = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [trainingType, setTrainingType] = useState("");

  const handleSearch = () => {
    dispatch(getTrainersBySearch({ city, trainingType }));
  };

  return (
    <div className="trainer-search-container">
      <TextField
        sx={{ bgcolor: "rgba(179, 229, 252, 0.8)" }}
        label="city"
        value={city}
        onChange={({ target: { value } }) => setCity(value)}
        required
        size="small"
      />
      <TextField
        sx={{ bgcolor: "rgba(179, 229, 252, 0.8)" }}
        label="trainingType"
        value={trainingType}
        onChange={({ target: { value } }) => setTrainingType(value)}
        required
        size="small"
      />
      <Button onClick={handleSearch} disabled={!city || !trainingType}>
        🔍
      </Button>
      <Button
        onClick={() => {
          dispatch(cleanSearch());
          setCity("");
          setTrainingType("");
        }}
      >
        clear search
      </Button>
    </div>
  );
};
