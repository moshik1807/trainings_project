import { useSelector, useDispatch } from "react-redux";

import { Typography } from "@mui/material";

import { TrainingInformation } from "./trainingInformation";
import { Button } from "../Button";
import { deleteTraining } from "../../features/trainings/trainingsThunk";
import { userSelector } from "../../features/user/userSlice";
import { trainersSelector } from "../../features/trainers/trainersSlice";

import "../../styles/componentsStyle/Card.css";

export const TrainingCard = ({ training }) => {
  const dispatch = useDispatch();

  const trainers = useSelector(trainersSelector);
  const user = useSelector(userSelector);

  const trainer = trainers?.find(
    ({ id }) => id === parseInt(training.trainerId)
  );

  const handleDelete = () =>
    dispatch(deleteTraining({ trainingId: training.id, userId: user.id }));

  if (!trainer) {
    return (
      <Typography variant="h3" sx={{ color: "white" }}>
        Trainer not found
      </Typography>
    );
  }

  return (
    <div className="card">
      <div className="card-content">
        <img
          src={trainer.profileImage}
          alt={trainer.name}
          className="card-avatar"
        />
        <TrainingInformation trainer={trainer} training={training} />
        <Button onClick={handleDelete}>🗑️</Button>
      </div>
    </div>
  );
};
