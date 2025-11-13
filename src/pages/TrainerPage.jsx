import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Box, Typography, Avatar, Paper, Stack, Divider } from "@mui/material";

import { DateTime } from "../components/DateTime";
import { trainersSelector } from "../features/trainers/trainersSlice";
import Navbar from "../components/Navbar";
import { TrainerInformation } from "../components/trainer/TrainerInformation";
import { TrainerPrifile } from "../components/trainer/TrainerProfile";

export default function TrainerPage() {
  const { id } = useParams();

  const [trainer, setTrainer] = useState(null);

  const trainers = useSelector(trainersSelector);

  useEffect(() => {
    if (trainers && id) {
      const trainer = trainers?.find((trainer) => trainer.id === parseInt(id));
      setTrainer(trainer);
    }
  }, [trainers, id]);
  if (!trainer) {
    return <Typography>Trainer not found</Typography>;
  }
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "rgba(179, 229, 252, 0.8)",
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            maxWidth: 700,
            width: "100%",
            borderRadius: 3,
            backgroundColor: "rgba(179, 229, 252, 0.8)",
          }}
        >
          <Stack spacing={3} alignItems="center">

            <TrainerPrifile trainer={trainer}/>

            <Divider sx={{ width: "100%" }} />

            <TrainerInformation trainer={trainer} />

            <Divider sx={{ width: "100%" }} />

            <DateTime trainerId={id} />

          </Stack>
        </Paper>
      </Box>
    </>
  );
}
