import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box, Grid, Container, Typography } from "@mui/material";

import { Navbar } from "../components/Navbar";
import { TrainerCard } from "../components/trainer/TrainerCard";
import { getAllTrainers } from "../features/trainers/trainersThunk";
import { trainersSelector } from "../features/trainers/trainersSlice";
import {
  searchTrainersSelector,
  searchTrainersErrorSelector,
} from "../features/SearchTrainers/SearchTrainersSlice";
import { userIdSelector } from "../features/user/userSlice";

export const TrainersPage = () => {
  const dispatch = useDispatch();

  const trainers = useSelector(trainersSelector);
  const searchTrainers = useSelector(searchTrainersSelector);
  const searchTrainersError = useSelector(searchTrainersErrorSelector);
  const user = useSelector(userIdSelector);

  useEffect(() => {
    if (user && !trainers.length) {
      dispatch(getAllTrainers());
    }
  }, [dispatch, trainers, user]);

  return (
    <>
      {searchTrainersError ? (
        <>
          <Navbar />
          <Container sx={{ mt: 4 }}>
            <Typography variant="h3" sx={{ color: "white" }}>
              No matching results found.
            </Typography>
          </Container>
        </>
      ) : (
        <Box>
          <Navbar showSearch={true} />
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
      )}
    </>
  );
};
