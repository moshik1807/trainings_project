import { useState } from "react";

import { Typography, Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

import { Button } from "./Button";

export const DateTime = ({ createNewTraining }) => {
  const [dateTime, setDateTime] = useState(dayjs());

  const handleSubmit = () => {
    createNewTraining(dateTime);
    setDateTime(dayjs());
  };

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ color: "rgba(2, 119, 189, 0.9)" }}>
        Schedule a Training
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          sx={{ width: 600 }}
          value={dateTime}
          onChange={setDateTime}
        />
      </LocalizationProvider>
      <Button onClick={handleSubmit}>Send</Button>
    </Grid>
  );
};
