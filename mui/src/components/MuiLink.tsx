import { Link, Stack, Typography } from "@mui/material";
const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Typography variant="h6">
        <Link href="#">Link</Link>
      </Typography>
      <Link color="secondary" href="#">
        Link
      </Link>
      <Link underline="hover">Underline when hover</Link>
      <Link underline="none">no underline</Link>
    </Stack>
  );
};

export default MuiLink;
