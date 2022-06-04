import { Box, TextField, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";
const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  console.log(country);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string);
  };

  const handleMultipleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack marginTop={4} spacing={2}>
      <Box width="250px">
        <TextField
          label="select country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
          helperText="Please select your country"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="USA">US</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>

      {/* multiselect */}

      <Box width="250px">
        <TextField
          color="warning"
          label="select multiple country"
          select
          value={countries}
          onChange={handleMultipleChange}
          fullWidth
          size="small"
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="USA">US</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default MuiSelect;
