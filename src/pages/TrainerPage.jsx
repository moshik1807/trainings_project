import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Typography, Stack, Divider } from "@mui/material";

import { createTraining } from "../features/trainings/trainingsThunk";
import { userIdSelector } from "../features/user/userSlice";
import { DateTime } from "../components/DateTime";
import { trainersSelector } from "../features/trainers/trainersSlice";
import { Navbar } from "../components/Navbar";
import { TrainerInformation } from "../components/trainer/TrainerInformation";
import { TrainerProfile } from "../components/trainer/TrainerProfile";

import "../styles/pagesStyle/TrainerPage.css";

export const TrainerPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [trainer, setTrainer] = useState(null);

  const trainers = useSelector(trainersSelector);
  const userId = useSelector(userIdSelector);

  const createNewTraining = (dateTime) => {
    dispatch(
      createTraining({
        trainerId: id,
        traineeId: userId,
        dateTime: dateTime,
      })
    );
  };

  useEffect(() => {
    if (trainers && id) {
      const parseId = parseInt(id);
      const trainer = trainers?.find(({ id }) => id === parseId);
      setTrainer(trainer);
    }
  }, [trainers, id]);

  return (
    <>
      {!trainer ? (
        <Typography>Trainer not found</Typography>
      ) : (
        <>
          <Navbar showSearch={false} />
          <div className="trainer-page-container">
            <div className="trainer-details-card">
              <Stack spacing={3} alignItems="center">
                <TrainerProfile trainer={trainer} />
                <Divider sx={{ width: "100%" }} />
                <TrainerInformation trainer={trainer} />
                <Divider sx={{ width: "100%" }} />
                <DateTime createNewTraining={createNewTraining} />
              </Stack>
            </div>
          </div>
        </>
      )}
    </>
  );
};
