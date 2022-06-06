import { Stack, CircularProgress, LinearProgress } from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="warning" />
      <CircularProgress variant="determinate" value={60} color="error" />
      <LinearProgress />
      <LinearProgress color="warning" />
      <LinearProgress variant="determinate" value={60} color="error" />
    </Stack>
  );
};

export default MuiProgress;
