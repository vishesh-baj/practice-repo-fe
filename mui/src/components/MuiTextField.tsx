import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        {/* variant by default is outlined */}
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Name"
          variant="outlined"
          error={!value}
          required
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="small secondary" size="small" color="secondary" />
        <TextField label="medium info" size="medium" color="info" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Form Input required" color="secondary" required />
        <TextField
          label="Form Input required with helper text"
          color="secondary"
          required
          helperText="Do not share your password with anyone"
        />
        <TextField
          label="Password"
          type="password"
          color="secondary"
          required
          helperText="Do not share your password with anyone"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Disabled Input"
          color="warning"
          disabled
          helperText="Do not share your password with anyone"
        />

        <TextField label="read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
          label="Weight"
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
