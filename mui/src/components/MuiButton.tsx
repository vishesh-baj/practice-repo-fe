import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="http://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        {/* start/end icon to add icon to front or back fo the nutton */}
        <Button
          variant="contained"
          disableRipple
          startIcon={<SendIcon />}
          onClick={() =>
            alert("Clicked on send with icon and disable ripple button")
          }
        >
          Send with start icon and disable ripple
        </Button>
        <Button variant="contained" disableElevation endIcon={<SendIcon />}>
          Send with end icon and disabled elevation
        </Button>

        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* BUTTON GROUP */}
      <Stack direction="row">
        <ButtonGroup
          aria-aria-label="alignment button group"
          variant="contained"
        >
          <Button
            onClick={() => alert("Clicked on button group first button")}
            color="primary"
          >
            Left
          </Button>
          <Button color="primary">Center</Button>
          <Button color="primary">Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          orientation="vertical"
          variant="outlined"
          size="small"
          color="secondary"
          aria-aria-label="alignment button group"
        >
          <Button color="primary">Left</Button>
          <Button color="primary">Center</Button>
          <Button color="primary">Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text-formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="info"
          //   if u weant to select only one button
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
export default MuiButton;
