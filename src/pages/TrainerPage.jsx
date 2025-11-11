import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Box, Typography, Avatar, Paper, Stack, Divider } from "@mui/material";

import { DateTime } from "../components/DateTime";
import { trainersSelector } from "../features/trainers/trainersSlice";
import Navbar from "../components/Navbar";

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
          minHeight: "100vh",
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
            <Avatar
              src={trainer.profileImage}
              alt={trainer.name}
              sx={{
                width: 250,
                height: 250,
                margin: "10px auto",
              }}
            />
            <Typography
              variant="h4"
              sx={{ color: "rgba(37, 37, 216, 0.6)", my: 1 }}
            >
              Name: {trainer.name}
            </Typography>
            <Divider sx={{ width: "100%" }} />
            <Box sx={{ width: "100%", textAlign: "left" }}>
              <Typography sx={{ my: 0.5 }}>
                <strong>City:</strong> {trainer.city}
              </Typography>
              <Typography sx={{ my: 0.5 }}>
                <strong>TrainingType:</strong> {trainer.trainingType}
              </Typography>
              <Typography sx={{ my: 0.5 }}>
                <strong>Education:</strong> {trainer.education}
              </Typography>
              <Typography sx={{ my: 0.5 }}>
                <strong>Bio:</strong> {trainer.bio}
              </Typography>
            </Box>
            <Divider sx={{ width: "100%" }} />

            <DateTime trainerId={id} />
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
