import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];
const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutocomplete;
