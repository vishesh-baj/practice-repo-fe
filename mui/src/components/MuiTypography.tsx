import { Stack, Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      {/* gutter bottom depends on size of varients */}
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/* default varient of typography */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nobis
        fuga dolorem nulla. Odio molestiae quibusdam quos quam eligendi
        praesentium, ipsum sint nihil quis ipsa accusantium laudantium quasi
        error perspiciatis?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius quasi
        assumenda? Esse, non! Voluptas est dolores deserunt atque deleniti, unde
        veritatis fuga alias modi animi ut eveniet consequatur nemo!
      </Typography>
    </Stack>
  );
};
export default MuiTypography;
