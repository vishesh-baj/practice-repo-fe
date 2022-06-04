import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";
const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
    console.log(checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="dark mode"
        control={<Switch onChange={handleChange} color="success" />}
      />
    </Box>
  );
};

export default MuiSwitch;
