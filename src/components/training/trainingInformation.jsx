import { Typography } from "@mui/material";

export function TrainingInformation({ trainer, training }) {
  return (
    <>
      <Typography variant="h6">
        <strong>trainer: </strong>
        {trainer.name}
      </Typography>
      <Typography variant="body2">
        <strong>training time :</strong> {training.date} {training.time}
      </Typography>
      <Typography variant="body2">
        <strong>trainingType : </strong>
        {trainer.trainingType}
      </Typography>
    </>
  );
}
