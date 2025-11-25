import { Typography } from "@mui/material";

export const TrainerDetails = ({ title, text }) => {
  return (
    <Typography sx={{ my: 0.5 }}>
      <strong>{title}: </strong>
      {text}
    </Typography>
  );
};
