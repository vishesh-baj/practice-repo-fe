import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import React, { useState, forwardRef } from "react";

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        onClose={handleClose}
        open={open}
        message="Form Submitted Successfully"
        autoHideDuration={4000}
        // to change the position
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
    </>
  );
};

export default MuiSnackbar;
