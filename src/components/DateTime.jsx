import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Snackbar,
  Box,
  TextField,
  Typography,
  Alert,
  Grid,
} from "@mui/material";

import { Button } from "./Button";
import { createTraining } from "../features/trainings/trainingsThunk";
import { traininssErrorSelector } from "../features/trainings/trainingsSlice";
import { userIdSelector } from "../features/user/userSlice";
import { CleanError } from "../features/trainings/trainingsSlice";

export function DateTime({ trainerId }) {
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  const error = useSelector(traininssErrorSelector);
  const userId = useSelector(userIdSelector);

  const handleSubmit = () => {
    dispatch(
      createTraining({
        trainerId: trainerId,
        traineeId: userId,
        date: date,
        time: time,
      })
    );
    setOpen(true);
    setDate("");
    setTime("");
  };

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ color: "rgba(2, 119, 189, 0.9)" }}>
        Schedule a Training
      </Typography>

      <TextField
        type="date"
        value={date}
        onChange={({ target: { value } }) => setDate(value)}
        fullWidth
      />

      <TextField
        type="time"
        value={time}
        onChange={({ target: { value } }) => setTime(value)}
        fullWidth
      />

      <Button onClick={handleSubmit}>Send</Button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
          dispatch(CleanError());
        }}
      >
        <Alert severity={error ? "error" : "success"}>
          {error ? error : "Training added successfully!"}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
