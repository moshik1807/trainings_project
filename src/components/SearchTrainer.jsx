import { useState } from "react";
import { useDispatch } from "react-redux";

import { Box, TextField } from "@mui/material";

import { Button } from "./Button";
import { getTrainersBySearch } from "../features/SearchTrainers/SearchTrainersThunk";
import { cleanSearch } from "../features/SearchTrainers/SearchTrainersSlice";

export default function SearchTrainer() {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [trainingType, setTrainingType] = useState("");

  const handleSearch = () => {
    if (city && trainingType) {
      dispatch(getTrainersBySearch({ city, trainingType }));
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      marginLeft="auto"
      borderRadius={"10px"}
      gap={1}
    >
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
      <Button onClick={handleSearch}>🔍</Button>

      <Button
        onClick={() => {
          dispatch(cleanSearch());
          setCity("");
          setTrainingType("");
        }}
      >
        clear search
      </Button>
    </Box>
  );
}
