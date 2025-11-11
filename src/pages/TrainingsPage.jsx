import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Box, Container, Grid } from "@mui/material";

import Navbar from "../components/Navbar";
import { TrainingCard } from "../components/TrainingCard";
import { getTrainingsById } from "../features/trainings/trainingsThunk";
import { userSelector } from "../features/user/userSlice";
import { trainingsSelector } from "../features/trainings/trainingsSlice";

export default function TrainingsPage() {
  const dispatch = useDispatch();

  const user = useSelector(userSelector);
  const trainings = useSelector(trainingsSelector);

  useEffect(() => {
    if (!user) {
      return;
    }
    if (!trainings.length) {
      dispatch(getTrainingsById(user.id));
    }
  }, [user, dispatch, trainings]);

  if (!trainings.length) {
    return (
      <>
        <Navbar />
        <Container sx={{ mt: 4 }}>
          <Typography variant="h3" sx={{ color: "white" }}>
            No training sessions have been scheduled yet.
          </Typography>
        </Container>
      </>
    );
  }
  return (
    <Box>
      <Navbar />
      <Grid container spacing={4} justifyContent="center" sx={{ p: 2 }}>
        {trainings.map((training, i) => (
          <Grid size={3} key={i}>
            <TrainingCard training={training} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
