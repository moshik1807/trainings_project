import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box, Grid, Container, Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import TrainerCard from "../components/TrainerCard";
import { getAllTrainers } from "../features/trainers/trainersThunk";
import { trainersSelector } from "../features/trainers/trainersSlice";
import {
  searchTrainersSelector,
  searchTrainersErrorSelector,
} from "../features/SearchTrainers/SearchTrainersSlice";

export default function TrainersPage() {
  const dispatch = useDispatch();

  const trainers = useSelector(trainersSelector);
  const searchTrainers = useSelector(searchTrainersSelector);
  const searchTrainersError = useSelector(searchTrainersErrorSelector);

  useEffect(() => {
    if (!trainers.length) {
      dispatch(getAllTrainers());
    }
  }, [dispatch, trainers]);

  if (searchTrainersError) {
    return (
      <>
        <Navbar />
        <Container sx={{ mt: 4 }}>
          <Typography variant="h3" sx={{ color: "white" }}>
            No matching results found.
          </Typography>
        </Container>
      </>
    );
  }
  return (
    <Box>
      <Navbar />
      <Grid container spacing={4} justifyContent="center" sx={{ p: 2 }}>
        {(searchTrainers.length > 0 ? searchTrainers : trainers).map(
          (trainer, i) => (
            <Grid size={4} key={i}>
              <TrainerCard trainer={trainer} />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
