import { Grid, Box } from "@mui/material";

const GridComponent = () => {
  //   Grid component is specifically used for the construction of two dimensional grid
  return (
    <Grid container my={4} spacing={2}>
      <Grid xs={6} item>
        <Box bgcolor="primary.light" p={2}>
          Item 1
        </Box>
      </Grid>
      <Grid xs={6} item>
        <Box bgcolor="primary.light" p={2}>
          Item 2
        </Box>
      </Grid>
      <Grid xs={6} item>
        <Box bgcolor="primary.light" p={2}>
          Item 3
        </Box>
      </Grid>
      <Grid xs={6} item>
        <Box bgcolor="primary.light" p={2}>
          Item 4
        </Box>
      </Grid>
    </Grid>
  );
};
export default GridComponent;
