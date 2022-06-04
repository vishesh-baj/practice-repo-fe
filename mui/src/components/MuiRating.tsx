import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const MuiRating = () => {
  const [value, setValue] = useState<number | null>(2);
  console.log(value);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" color="error" />}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
      />
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        readOnly
      />
    </Stack>
  );
};
export default MuiRating;
