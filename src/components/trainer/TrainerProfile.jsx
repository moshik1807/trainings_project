import { Typography } from "@mui/material";

import "../../styles/componentsStyle/trainer/TrainerProfileStyle.css";

export const TrainerProfile = ({ trainer }) => {
  return (
    <>
      <img
        src={trainer.profileImage}
        alt={trainer.name}
        className="trainer-profile-avatar"
      />
      <Typography variant="h4" className="trainer-profile-name">
        Name: {trainer.name}
      </Typography>
    </>
  );
};
