import { Box } from "@mui/material";

const BoxComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        height: "100px",
        width: "100px",
        padding: "16px",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      Vishesh
    </Box>
  );
};

export default BoxComponent;
