import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";

import "../../styles/componentsStyle/Card.css";

export const TrainerCard = ({ trainer }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/trainer/${trainer.id}`);

  return (
    <div onClick={handleClick} className="card">
      <div className="card-content">
        <img
          className="card-avatar"
          src={trainer.profileImage}
          alt={trainer.name}
        />
        <Typography variant="h6">{trainer.name}</Typography>
        <Typography variant="body2">
          trainingType: {trainer.trainingType}
        </Typography>
      </div>
    </div>
  );
};
