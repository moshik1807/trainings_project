import { Typography } from "@mui/material";

import dayjs from "dayjs";

export const TrainingInformation = ({ trainer, training }) => {
  const trainingDate = dayjs(training.dateTime).format("YYYY-MM-DD");
  const trainingTime = dayjs(training.dateTime).format("HH:mm");

  return (
    <>
      <Typography variant="h6">
        <strong>trainer: </strong>
        {trainer.name}
      </Typography>
      <Typography variant="body2">
        <strong>training time :</strong> {trainingDate} {trainingTime}
      </Typography>
      <Typography variant="body2">
        <strong>trainingType : </strong>
        {trainer.trainingType}
      </Typography>
    </>
  );
};
