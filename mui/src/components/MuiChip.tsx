import { Chip, Stack, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" />
      <Chip label="Chip" color="primary" icon={<FaceIcon />} />
      <Chip label="Chip outlined avatar" color="warning" variant="outlined" />
      <Chip
        label="Chip outlined"
        color="warning"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />

      <Chip
        label="Click"
        color="success"
        onClick={() => alert("Clicked on chip")}
        onDelete={() => alert("Delete clicked on chip")}
      />
    </Stack>
  );
};

export default MuiChip;
