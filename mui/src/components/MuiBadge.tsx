import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={5} color="secondary" showZero>
        <MailIcon />
      </Badge>

      <Badge badgeContent={100} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} max={999} color="warning">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
