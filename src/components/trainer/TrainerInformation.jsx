import { Box } from "@mui/material";

import { TrainerDetails } from "./TrainerDetails";

export const TrainerInformation = ({ trainer }) => {
  return (
    <Box sx={{ width: "100%", textAlign: "left" }}>
      <TrainerDetails title="City" text={trainer.city} />
      <TrainerDetails title="TrainingType" text={trainer.trainingType} />
      <TrainerDetails title="Education" text={trainer.education} />
      <TrainerDetails title="Bio" text={trainer.bio} />
    </Box>
  );
};
