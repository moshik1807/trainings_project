import { useNavigate } from "react-router-dom";

import { Card, CardContent, Typography, Avatar } from "@mui/material";

export default function TrainerCard({ trainer }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trainer/${trainer.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        m: 1,
        p: 1,
        bgcolor: "rgba(179, 229, 252, 0.8)",
        borderRadius: "10px",
        "&:hover": {
          transform: "scale(1.10)",
        },
      }}
    >
      <Avatar
        src={trainer.profileImage}
        alt={trainer.name}
        sx={{
          width: 100,
          height: 100,
          margin: "10px auto",
        }}
      />
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h6">{trainer.name}</Typography>
        <Typography variant="body2">
          trainingType: {trainer.trainingType}
        </Typography>
      </CardContent>
    </Card>
  );
}
