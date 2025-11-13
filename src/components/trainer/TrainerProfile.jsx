import { Typography, Avatar } from "@mui/material";

export function TrainerPrifile({trainer}){
    return(
        <>
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
        </>
    )
}